import React from 'react';
import './Stopwatch.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { changeAction, changeClick } from '../redux/Actions';
import { Spring } from 'react-spring/renderprops';
import Button from '@material-ui/core/Button';
import CloudUploadRoundedIcon from '@material-ui/icons/CloudUploadRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded'

function FormHeader(props) {
  if (props.toggle === 1) {
    return <h1>Mapping:</h1>
  } else if (props.toggle === 2) {
    return <h1>Rhythm already exists in database</h1>
  } else if (props.toggle === 3) {
    return <h1>Rhythm does not exist in database</h1>
  } else {
    return <h1>Mapping: {props.mapping}</h1>
  }
}

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: 0,
      time: 0,
      lap: [0],
      stopped: false,
      toggle: 0,
      mapping: "",
    }
  }

  componentDidUpdate() {
    if (this.state.time - this.state.lap[this.state.lap.length - 1] >= 2 && !this.state.stopped)
      this.stop();
  }

  changeState() {
    if (this.state.state === 0) {
      var _this = this;
      this.timer = setInterval(function () {
        _this.setState({
          state: 1,
          time: Math.round((_this.state.time + Number.EPSILON + 0.01) * 100) / 100,
        });
      }, 10);
    } else {
      this.state.lap.push(this.state.time);
    }
    console.log(this.state.lap);
  }

  stop() {
    this.setState({
      stopped: true,
    })
    clearInterval(this.timer);

    const options = {
      url: 'http://localhost:9000/test',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        lap: this.state.lap,
      },
    }

    axios(options).then(res => {
      if (this.props.action === 1) {
        if (!res.data) { 
          this.setState({
            toggle: 1,
          })
        } else { 
          this.setState({
            toggle: 2,
          });
        }
      } else {
        if (!res.data) {
          this.setState({
            toggle: 3,
          })
        } else {
          this.setState({
            toggle: 4,
            mapping: res.data,
          })
        }
      }
    })
  }

  handleSubmit = () => {
    if (this.state.toggle === 1) {
      const options = {
        url: 'http://localhost:9000/submit',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          lap: this.state.lap,
          mapping: this.state.mapping
        },
      }
      console.log(this.state.mapping);

      axios(options);
      console.log("Added to database");
    }

    this.setState({
      state: 0,
      time: 0,
      lap: [0],
      toggle: 0,
      mapping: "",
      stopped: false,
    });

    this.props.changeClick(0);
    this.props.changeAction(null);
  }

  render() {
    return (
      <div className="stopwatch-container">
        <div
          className="stopwatch"
          onClick={() => this.changeState()}
        >
        </div>
        <Spring
          to={{
            opacity: this.state.toggle ? 1 : 0,
          }}
        >
          {props => (
            <div
              className="mapping-form"
              style={Object.assign(props, { zIndex: this.state.toggle ? 1 : -1 })}
            >
              <div className="mapping-form-container">
                <FormHeader toggle={this.state.toggle} mapping={this.state.mapping} />
                {this.state.toggle === 1 && <input
                  type="text"
                  value={this.state.mapping}
                  onChange={(e) => this.setState({ mapping: e.target.value })}
                />}
                <div className="stopwatch-button-container">
                  {this.state.toggle === 1 ?
                    <Button
                      className="button"
                      onClick={() => this.handleSubmit()}
                      style={{
                        fontSize: '20px'
                      }}
                      size="large"
                      endIcon={<CloudUploadRoundedIcon />}
                    >
                      Submit
                    </Button> :
                    <Button
                      className="button"
                      onClick={() => this.handleSubmit()}
                      style={{
                        fontSize: '20px'
                      }}
                      size="large"
                      endIcon={<HomeRoundedIcon />}
                    >
                      Home
                    </Button>
                  }
                </div>
              </div>
            </div>
          )}
        </Spring>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  action: state.action,
  click: state.click,
})

const mapDispatchToProps = {
  changeAction,
  changeClick,
}

export default connect(mapStateToProps, mapDispatchToProps)(Stopwatch);
