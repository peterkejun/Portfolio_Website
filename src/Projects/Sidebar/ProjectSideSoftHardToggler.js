import React from 'react';
export class ProjectSideSoftHardToggler extends React.Component {

    render() {
        const div_style = {
            width: '224px',
            height: '44px',
            backgroundColor: 'none',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
        };

        const base_style = {
            position: 'absolute',
            width: '210px',
            marginLeft: '7px',
            marginRight: '7px',
            height: '37px',
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            color: 'transparent',
            borderRadius: "10px",
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
        };

        const selection_style = {
            position: 'absolute',
            zIndex: '2',
            width: '118px',
            height: '44px',
            backgroundColor: 'white',
            borderRadius: '10px',
            color: '#3D138D',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0px 0px 5px 0px rgba(10,10,10,0.3)',
            marginLeft: this.props.ware === 'software' ? '0' : '106px',
            transition: 'margin-left 0.3s ease-out',
        };

        const selection_title_style = {
            color: '#3D138D',
            fontWeight: 'bold',
            fontSize: '20px',
            margin: '0',
            cursor: 'default',
        };

        const base_software_style = {
            position: 'absolute',
            zIndex: '1',
            width: '194px',
            textAlign: 'left',
            marginLeft: '16px',
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#3D138D',
        };

        const base_hardware_style = {
            position: 'absolute',
            zIndex: '1',
            width: '194px',
            textAlign: 'right',
            marginRight: '16px',
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#3D138D',
        };

        return <div style={div_style}>
            <div style={base_style} onClick={this.props.onChangeWare.bind(this)}>
                <h1 style={base_software_style}>Software</h1>
                <h1 style={base_hardware_style}>Hardware</h1>
            </div>
            <div style={selection_style}>
                <h1 style={selection_title_style}>{this.props.ware === 'software' ? "Software" : "Hardware"}</h1>
            </div>
        </div>
    }

}
