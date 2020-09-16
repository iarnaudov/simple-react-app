import React from 'react';

export default class MyComponent extends React.Component<{}, {isShown: boolean}> {
    constructor(props: any) {
        super(props);
        this.state = {
            isShown: true,
        }
    }

    toggleIsShown = () => this.setState({isShown: !this.state.isShown})

    render() {
        return (
            <div>
                <button onClick={this.toggleIsShown}>Toggle</button>
                {/* {this.state.isShown && <div>Text goes here</div>} */}
                <div style={this.state.isShown ? {display:'block'} : {display:'none'}}>Text goes here</div>
            </div>
        );
    }
}