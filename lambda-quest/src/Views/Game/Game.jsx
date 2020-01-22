import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { initGame } from "../../actions/gameActions";
import "./game.css";
import logo from "../../assets/logo.jpg";
import guy from "../../assets/dude.png";
import Table from "react-bootstrap/Table";
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'


class Game extends Component {
  static propTypes = {
    gamedata: PropTypes.object
  };

  componentDidMount() {
    this.props.initGame();
  }

  render() {
    const { uuid, players, title, description, name } = this.props.gamedata;

    return (
      <>
        <div className="gamebanner">
          <img src={logo} alt="" className="logo" />
          <h1 className="lquestTitle">LambdaQuest</h1>
          <h3>Wecome, {name}</h3>
        </div>
        <div className="mazecontainer">
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>
                  {description === "1" ? (
                    <img src={guy} alt="" className="guy" />
                  ) : (
                    1
                  )}
                </th>
                <th>
                  {description === "2" ? (
                    <img src={guy} alt="" className="guy" />
                  ) : (
                    2
                  )}
                </th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                <th>7</th>
                <th>8</th>
                <th>9</th>
                <th>10</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>11</td>
                <td>12</td>
                <td>13</td>
                <td>14</td>
                <td>15</td>
                <td>16</td>
                <td>17</td>
                <td>18</td>
                <td>19</td>
                <td>20</td>
              </tr>
              <tr>
                <td>21</td>
                <td>22</td>
                <td>23</td>
                <td>24</td>
                <td>25</td>
                <td>26</td>
                <td>27</td>
                <td>28</td>
                <td>29</td>
                <td>30</td>
              </tr>
              <tr>
                <td>31</td>
                <td>32</td>
                <td>33</td>
                <td>34</td>
                <td>35</td>
                <td>36</td>
                <td>37</td>
                <td>38</td>
                <td>39</td>
                <td>40</td>
              </tr>
              <tr>
                <td>41</td>
                <td>42</td>
                <td>43</td>
                <td>44</td>
                <td>
                  {title === "Outside Cave Entrance" ? (
                    <img src={guy} alt="" className="guy" />
                  ) : (
                    45
                  )}
                </td>
                <td>46</td>
                <td>47</td>
                <td>48</td>
                <td>49</td>
                <td>50</td>
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
                    <Card.Body><div className="whoIsHere">
                <h4>Student in this room:</h4>
                <p>{players}</p>
              </div></Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="1">
                    Chat
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body><div className="chatbox">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur commodi, eum deserunt excepturi possimus error, delectus adipisci amet earum veritatis eos alias beatae quam ipsa consequatur laborum, vitae sit dicta!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia doloremque quae vero nulla numquam dolorum? In veniam eveniet est ratione accusantium? Vero sequi eos aliquid, ducimus perferendis dolorum! Obcaecati, sequi?</div></Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
              
              
            </div>
          </div>
        </div>

        <p>{uuid}</p>

        <h4>{title}</h4>
        <h4>{description}</h4>
        <img src={guy} alt="" className="guy" />
        {console.log(players)}
      </>
    );
  }
}

const mapStateToProps = state => ({
  //name_of_state: state.reducerfilename.item_in_state
  gamedata: state.gameReducer.players
});

export default connect(mapStateToProps, { initGame })(Game);
