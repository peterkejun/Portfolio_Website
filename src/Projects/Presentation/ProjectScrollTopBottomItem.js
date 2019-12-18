import React from 'react';

export class ProjectScrollTopBottomItem extends React.Component {

    render() {

        const div_style = {
            width: '100%',
            flex: '1',
            margin: this.props.marginPosition === 'top' ? '30px 0 0 0' : '0 0 30px 0',
        };

        const h1_style = {
            color: !this.props.dummy ? '#3D138D' : 'transparent',
            fontSize: '30px',
            fontWeight: '300',
            margin: '0',
        };

        return <div className={'container-fluid col-sm-7'} style={div_style} ref={this.props.div_ref}>
            <h1 style={h1_style}>{this.props.project != null ? this.props.project.title : "Sample Project"}</h1>
        </div>
    }

}
