import React from "react";
import { Picker } from "@react-native-picker/picker";
import { setTarget } from "../store/target";
import { connect } from "react-redux";

class TargetPicker extends React.Component {
  render() {
    const { target, setTarget } = this.props;
    console.log("props", this.props);
    return (
      <Picker
        selectedValue={target}
        style={{ height: 50, width: 100 }}
        onValueChange={setTarget(itemValue)}
      >
        <Picker.Item label="Russian" value="ru" />
        <Picker.Item label="Spanish" value="es" />
        <Picker.Item label="Portuguese" value="pt" />
      </Picker>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    target: state.target,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTarget: (lang) => dispatch(setTarget(lang)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TargetPicker);