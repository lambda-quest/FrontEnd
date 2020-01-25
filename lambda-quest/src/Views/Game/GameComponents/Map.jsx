import React, { Component } from "react";
import { connect } from "react-redux";
import { getRooms } from "../../../actions/gameActions";
//components

//bootstrap
// import Table from "react-bootstrap/Table";
//stying
import "../game.css";
//assetts
// import dude from "../../../assets/lambdadudeNoBg.png";

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRoom: props.activeRoom
    };
  }

  componentDidMount() {
    this.props.getRooms();
  }

  render() {
    // console.log("Map");
    // console.log(this.props.rooms);
    console.log("Room inside Map component");
    console.log(this.props);
    console.log(this.props.activeRoom);
    return (
      <div className="gameboard-container">
        <div className="lquestMap">
          {this.props.rooms.sort((a,b) =>a.id - b.id).map(room => {
            return (
              <div
                key={room.id}
                className={
                  room.id === this.props.activeRoom
                    ? "lquestMapRoomActive"
                    : "lquestMapRoom"
                }
              >
                {room.id}
              </div>
            );
          })}
        </div>

        {/* <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>1</th>
              <th>2</th>
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
                {this.props.title === "Grand Overlook" ? (
                  <img src={dude} alt="dude" className="tinyguy" />
                ) : (
                  "45"
                )}
              </td>
              <td>
                {this.props.title === "Treasure Chamber" ? (
                  <img src={dude} alt="dude" className="tinyguy" />
                ) : (
                  "46"
                )}
              </td>
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
              <td>
                {this.props.title === "Foyer" ? (
                  <img src={dude} alt="dude" className="tinyguy" />
                ) : (
                  "55"
                )}
              </td>
              <td>
                {this.props.title === "Narrow Passage" ? (
                  <img src={dude} alt="dude" className="tinyguy" />
                ) : (
                  "56"
                )}
              </td>
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
              <td>
                {this.props.title === "Outside Cave Entrance" ? (
                  <img src={dude} alt="dude" className="tinyguy" />
                ) : (
                  "65"
                )}
              </td>
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
              <td>70</td>
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
        </Table> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  //name_of_state: state.reducerfilename.item_in_state
  rooms: state.gameReducer.rooms
});

export default connect(mapStateToProps, { getRooms })(Map);