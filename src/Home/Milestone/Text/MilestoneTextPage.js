import React from 'react';
import {MilestoneCard} from "./MilestoneCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import './MilestoneTextPage.css';

export class MilestoneTextPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fetch_complete: false,
            fetch_failed: false,
            blogs: [],
        };
        fetch("http://127.0.0.1:8080?prop_type=blogs", {
            method: 'GET',
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        fetch_complete: true,
                        fetch_failed: false,
                        blogs: result,
                    });
                    // this.setState({
                    //     id: result.id,
                    //     title: result.title,
                    //     content: result.content,
                    //     date: new Date(Date.parse(result.date.replace('-','/','g'))),
                    //     img_url: result.img_url,
                    // });
                },
                (error) => {
                    this.setState({
                        fetch_complete: false,
                        fetch_failed: true,
                        blogs: [{
                            id: "N/A",
                            title: "❌ Looks like server's down :(",
                            content: "Yes, I'm working on it. 🤠",
                            date: "N/A",
                            img_url: "N/A",
                        }],
                    });
                    // this.setState({
                    //     id: "N/A",
                    //     title: "N/A",
                    //     content: "N/A",
                    //     date: "N/A",
                    //     img_url: "N/A",
                    // });
                    console.log(error);
                }
            )
    }

    render() {
        return <div className={'col-lg-8 col-md-12 col-sm-12 milestone-text-container'}>
            <div className={'container-fluid milestone-text-inner-container'}>
                <div className={'card-deck'}>
                    {
                        this.state.blogs.map((blog) =>
                            <MilestoneCard blog={blog}/>
                        )
                    }
                </div>
            </div>
        </div>;
    }

}
