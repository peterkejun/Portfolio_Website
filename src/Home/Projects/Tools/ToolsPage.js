import React from "react";
import {ToolItem} from "./ToolItem";
import github from '../../../img/tools/github_logo.svg';
import intellij from '../../../img/tools/intellij_logo.svg';
import phpstorm from '../../../img/tools/phpstorm_logo.svg';
import carthage from '../../../img/tools/carthage.svg';
import clion from '../../../img/tools/clion_logo.svg';
import google_cloud from '../../../img/tools/gcp_logo.svg';
import graphql from '../../../img/tools/graphql_logo.svg';
import cocoapods from '../../../img/tools/cocoapods_logo.svg';
import mysql from '../../../img/tools/mysql_logo.svg';
import photoshop from '../../../img/tools/photoshop_logo.svg';
import sketch from '../../../img/tools/sketch_logo.svg';
import sqlite from '../../../img/tools/sqlite_logo.svg';
import mplab from '../../../img/tools/mplab_logo.png';
import autocad from '../../../img/tools/autocad_logo.svg';
import eagle from '../../../img/tools/eagle_logo.svg';
import next from '../../../img/icon_next_white.svg';
import previous from '../../../img/icon_previous_white.svg';
import './ToolsPage.css'

export class ToolsPage extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            selected_tool: 0,
        };
        this.tools_count = 0;
        this.tools = [];
    }

    color_of_tool(tool) {
        if (tool === 'N/A' || this.tools === []) return 'white';
        console.log(this.tools);
        console.log(this.tools[tool]);
        switch (this.tools[tool].name) {
            case 'Autocad': return '#BA2C26';
            case 'CLion': return '#22D88F';
            case 'Cocoapods': return '#FA2A00';
            case 'Eagle': return '#C17F34';
            case 'Google Cloud': return '#4C8CF5';
            case 'Github': return 'white';
            case 'GraphQL': return '#E535AB';
            case 'IntelliJ IDEA': return '#087CFA';
            case 'MPLAB X IDE': return 'white';
            case 'MySQL': return '#DC892B';
            case 'Photoshop': return '#00C8FF';
            case 'PhpStorm': return '#B345F1';
            case 'Sketch': return '#FDAD00';
            case 'SQLite 3': return '#0F80CC';
            case 'Carthage': return 'white';
            default: return 'white';
        }
    }

    componentDidMount() {
        console.log('sdf')
        fetch("http://ec2-3-19-185-142.us-east-2.compute.amazonaws.com/index.php?prop_type=tools", {
            method: 'GET',
        })
            .then(res => res.json())
            .then(
                (result) => {
                    console.log('kkk')
                    this.tools = result;
                    this.tools_count = result.length;
                    this.setState({
                        selected_tool: 0,
                    })
                },
                (error) => {
                    console.log('error')
                    this.tools = [];
                    this.tools_count = 0;
                    this.setState({
                        selected_tool: 0,
                    });
                    console.log(error);
                }
            )
    }

    select_tool(new_tool) {
        console.log(new_tool);
        if (this.state.selected_tool !== new_tool) {
            this.setState({
                selected_tool: new_tool,
            })
        }
    }

    set_next_tool() {
        const next = this.next_tool_of(this.state.selected_tool);
        if (next !== 'N/A') this.setState({
            selected_tool: next,
        });
    }

    set_previous_tool() {
        const pre = this.previous_tool_of(this.state.selected_tool);
        if (pre !== 'N/A') this.setState({
            selected_tool: pre,
        });
    }

    previous_tool_of(current) {
        if (current === 0) return this.tools_count - 1;
        return current - 1;
    }

    next_tool_of(current) {
        if (current === this.tools_count - 1) return 0;
        return current + 1;
    }

    src_of_tool(tool) {
        switch (tool) {
            case 'Autocad': return autocad;
            case 'CLion': return clion;
            case 'Cocoapods': return cocoapods;
            case 'Eagle': return eagle;
            case 'Google Cloud': return google_cloud;
            case 'Github': return github;
            case 'GraphQL': return graphql;
            case 'IntelliJ IDEA': return intellij;
            case 'MPLAB X IDE': return mplab;
            case 'MySQL': return mysql;
            case 'Photoshop': return photoshop;
            case 'PhpStorm': return phpstorm;
            case 'Sketch': return sketch;
            case 'SQLite 3': return sqlite;
            case 'Carthage': return carthage;
            default: return autocad;
        }
    }

    render() {
        const pre_color = {
            // color: this.color_of_tool(this.previous_tool_of(this.state.selected_tool)),
        };
        const next_color = {
            // color: this.color_of_tool(this.next_tool_of(this.state.selected_tool)),
        };
        console.log('commit');
        const pre_tool_name = this.tools_count === 0 ? 'N/A' : this.tools[this.previous_tool_of(this.state.selected_tool)].name;
        const next_tool_name = this.tools_count === 0 ? 'N/A' : this.tools[this.next_tool_of(this.state.selected_tool)].name;
        return <div className={'tools-page-container'}>
            <h1 className={'tools-page-title'}>What tools do I use?</h1>
            <div className={'tools-page-logos-container'}>
                {
                    this.tools.map((tool, i) =>
                        <ToolItem tool={tool} selected={i === this.state.selected_tool} onClick={this.select_tool.bind(this)} key={i} index={i} />
                    )
                }
            </div>
            <hr className={'tools-page-separator'} />
            <div className={'tools-detail-container'}>
                <div className={'container-fluid tools-detail-display-container'}>
                    <a target={'_blank'} href={this.tools_count === 0 ? null : this.tools[this.state.selected_tool].link_url}>
                        <img className={'tool-detail-image'} src={this.tools_count === 0 ? null : this.tools[this.state.selected_tool].img_url + '?sanitize=true'} alt={'tool'}/>
                    </a>
                    <p className={'tools-detail-paragraph'}>
                        {this.tools_count === 0 ? '' : this.tools[this.state.selected_tool].description}
                    </p>
                </div>
                <div className={'tools-detail-toggle-container'}>
                    <div className={'tools-detail-toggle-pre'} onClick={this.set_previous_tool.bind(this)}>
                        <img src={previous} alt={'previous'} />
                        <h1 className={'tools-detail-pre-title'} style={pre_color}>{pre_tool_name}</h1>
                    </div>
                    <div className={'tools-detail-toggle-next'} onClick={this.set_next_tool.bind(this)}>
                        <h1 className={'tools-detail-next-title'} style={next_color}>{next_tool_name}</h1>
                        <img src={next} alt={'next'} />
                    </div>
                </div>
            </div>
        </div>
    }

}


// autocad
// clion
// cocoapods
// eagle
// github
// graphql
// intellij
// mplab
// mysql
// photoshop
// phpstorm
// sketch
// sqlite
// xcode
