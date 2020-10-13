import React from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter:0
        }

        console.log("Constructor")
    }

    myFunction() {
        let myVariable = 10;
        myVariable++;
        console.log("my Function : ", myVariable);
    }

    componentDidMount(){
        console.log('Component did mount')
    }
    render() {

        console.log("Rendering class...")
        return (
            <SafeAreaView>
                <View>
                    <Text style={{fontSize: 150, textAlign: 'center'}}>{this.state.counter}</Text>
                    <Button title="Up" onPress={() => this.setState({counter: this.state.counter + 1 })} />
                    <Button title="Down" onPress={() => this.setState({counter: this.state.counter - 1 })} />
                    <Button title="Reset" onPress={() => this.setState({counter: 0 })} />

                    <Button title="Check" onPress={() => this.myFunction} />
                </View>
            </SafeAreaView>
        )
    }
}

export default App;