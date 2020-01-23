import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { initGame } from "../../actions/gameActions";
// import { moveGuyNorth } from "../../actions/gameActions";
import "./game.css";
import logo from "../../assets/logo.jpg";
import guy from "../../assets/dude.png";
import Table from "react-bootstrap/Table";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Room from "./GameComponents/Room"
import ControlPanel from "./GameComponents/ControlPanel"

class Game extends Component {
  static propTypes = {
    gamedata: PropTypes.object
  };

  render() {
    const { uuid, players, title, description, name } = this.props.gamedata;

    return (
      <>
        <div className="gamebanner">
          <img src={logo} alt="" className="logo" />
          <h1 className="lquestTitle">LambdaQuest</h1>
          <h3>Welcome, {name}</h3>
        </div>
        <button onClick={this.props.initGame}>start</button>
        {/* <button onClick={e => this.moveGuy(e)}>north</button> */}
        <ControlPanel />
        {/* <div className="mazecontainer">
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>
                  {description === "1" ? <img src={guy} alt="" className="guy" />: 1}
                  </th>
                <th>
                  {description === "2" ? <img src={guy} alt="" className="guy" />: 2 }
                  </th>
                <th>
                  {description === "3" ? <img src={guy} alt="" className="guy" />: 3 }
                  </th>
                <th>
                  {description === "4" ? <img src={guy} alt="" className="guy" />: 4 }
                  </th>
                <th>
                  {description === "5" ? <img src={guy} alt="" className="guy" />: 5 }
                  </th>
                <th>
                  {description === "6" ? <img src={guy} alt="" className="guy" />: 6 }
                  </th>
                <th>
                  {description === "7" ? <img src={guy} alt="" className="guy" />: 7 }
                  </th>
                <th>
                  {description === "8" ? <img src={guy} alt="" className="guy" />: 8 }
                  </th>
                <th>
                  {description === "9" ? <img src={guy} alt="" className="guy" />: 9 }
                  </th>
                <th>
                  {description === "10" ? <img src={guy} alt="" className="guy" />: 10 }
                  </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {description === "11" ? <img src={guy} alt="" className="guy" />: 11 }
                  </td>
                <td>
                  {description === "12" ? <img src={guy} alt="" className="guy" />: 12 }
                  </td>
                <td>
                  {description === "13" ? <img src={guy} alt="" className="guy" />: 13 }
                  </td>
                <td>
                  {description === "14" ? <img src={guy} alt="" className="guy" />: 14 }
                  </td>
                <td>
                  {description === "15" ? <img src={guy} alt="" className="guy" />: 15 }
                  </td>
                <td>
                  {description === "16" ? <img src={guy} alt="" className="guy" />: 18 }
                  </td>
                <th>
                  {description === "19" ? <img src={guy} alt="" className="guy" />: 19 }
                  </th>
                <td>
                  {description === "20" ? <img src={guy} alt="" className="guy" />: 20 }
                  </td>
                
              </tr>
              <tr>
                <td>
                  {description === "11" ? <img src={guy} alt="" className="guy" />: 11 }
                  </td>
                <td>
                  {description === "12" ? <img src={guy} alt="" className="guy" />: 12 }
                  </td>
                <td>
                  {description === "13" ? <img src={guy} alt="" className="guy" />: 13 }
                  </td>
                <td>
                  {description === "14" ? <img src={guy} alt="" className="guy" />: 14 }
                  </td>
                <td>
                  {description === "15" ? <img src={guy} alt="" className="guy" />: 15 }
                  </td>
                <td>
                  {description === "16" ? <img src={guy} alt="" className="guy" />: 18 }
                  </td>
                <th>
                  {description === "19" ? <img src={guy} alt="" className="guy" />: 19 }
                  </th>
                <td>
                  {description === "20" ? <img src={guy} alt="" className="guy" />: 20 }
                  </td>
                
              </tr>
              <tr>
              <td>
                  {description === "31" ? <img src={guy} alt="" className="guy" />: 20 }
                  </td>
                  <td>
                  {description === "32" ? <img src={guy} alt="" className="guy" />: 20 }
                  </td>
                  <td>
                  {description === "33" ? <img src={guy} alt="" className="guy" />: 20 }
                  </td>
                  <td>
                  {description === "34" ? <img src={guy} alt="" className="guy" />: 20 }
                  </td>
                  <td>
                  {description === "35" ? <img src={guy} alt="" className="guy" />: 20 }
                  </td>
                  <td>
                  {description === "36" ? <img src={guy} alt="" className="guy" />: 20 }
                  </td>
                  <td>
                  {description === "37" ? <img src={guy} alt="" className="guy" />: 20 }
                  </td>
                  <td>
                  {description === "38" ? <img src={guy} alt="" className="guy" />: 20 }
                  </td>
                  <td>
                  {description === "39" ? <img src={guy} alt="" className="guy" />: 20 }
                  </td>
                  <td>
                  {description === "40" ? <img src={guy} alt="" className="guy" />: 20 }
                  </td>
              </tr>
              <tr>
              <td>
                  {description === "41" ? <img src={guy} alt="" className="guy" />: 20 }
                  </td><td>
                  {description === "42" ? <img src={guy} alt="" className="guy" />: 20 }
                  </td><td>
                  {description === "43" ? <img src={guy} alt="" className="guy" />: 20 }
                  </td><td>
                  {description === "44" ? <img src={guy} alt="" className="guy" />: 20 }
                  </td>
                <td>
                  {title === "Outside Cave Entrance" ? <img src={guy} alt="" className="guy" />: 45}
                  </td>
                  <td>
                  {description === "46" ? <img src={guy} alt="" className="guy" />: 20 }
                  </td>
                  <td>
                  {description === "47" ? <img src={guy} alt="" className="guy" />: 20 }
                  </td><td>
                  {description === "48" ? <img src={guy} alt="" className="guy" />: 20 }
                  </td><td>
                  {description === "49" ? <img src={guy} alt="" className="guy" />: 20 }
                  </td>
              </tr>
              <tr>
                <td>51</td>
                <td>52</td>
                <td>53</td>
                <td>54</td>
                <td>55</td>
                <td>56</td>
                <td>57</td>
                <td>58</td>
                <td>59</td>
                <td>60</td>
              </tr>
              <tr>
                <td>61</td>
                <td>62</td>
                <td>63</td>
                <td>64</td>
                <td>65</td>
                <td>66</td>
                <td>67</td>
                <td>68</td>
                <td>69</td>
                <td>70</td>
              </tr>
              <tr>
                <td>71</td>
                <td>72</td>
                <td>73</td>
                <td>74</td>
                <td>75</td>
                <td>76</td>
                <td>77</td>
                <td>78</td>
                <td>79</td>
                <td>80</td>
              </tr>
              <tr>
                <td>81</td>
                <td>82</td>
                <td>83</td>
                <td>84</td>
                <td>85</td>
                <td>86</td>
                <td>87</td>
                <td>88</td>
                <td>89</td>
                <td>90</td>
              </tr>
              <tr>
                <td>91</td>
                <td>92</td>
                <td>93</td>
                <td>94</td>
                <td>95</td>
                <td>96</td>
                <td>97</td>
                <td>98</td>
                <td>99</td>
                <td>100</td>
              </tr>
            </tbody>
          </Table>
          <div>
            <div className="rightsidecontainer">
              <Accordion defaultActiveKey="0">
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    Who's Here?
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <div className="whoIsHere">
                        <h4>Student in this room:</h4>
                        <p>{players}</p>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>

              <Accordion defaultActiveKey="0">
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    Chat
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <div className="chatbox">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aspernatur commodi, eum deserunt excepturi possimus
                        error, delectus adipisci amet earum veritatis eos alias
                        beatae quam ipsa consequatur laborum, vitae sit dicta!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Mollitia doloremque quae vero nulla numquam dolorum? In
                        veniam eveniet est ratione accusantium? Vero sequi eos
                        aliquid, ducimus perferendis dolorum! Obcaecati, sequi?
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
          </div>
        </div>
         */}
        

        {/* Room Component */}
        <Room />
        {/* <ControlPanel /> */}
        <p>{uuid}</p>

        <h4>{title}</h4>
        <h4>{description}</h4>
        <img src={guy} alt="" className="guy" />
        {console.log(players)}
        {console.log(title)}
      </>
    );
  }
}

const mapStateToProps = state => ({
  //name_of_state: state.reducerfilename.item_in_state
  gamedata: state.gameReducer.players
});

export default connect(mapStateToProps, { initGame })(Game);
