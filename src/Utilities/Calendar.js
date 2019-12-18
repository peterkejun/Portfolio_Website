import React from 'react';
import next_icon from '../img/icon-next.png';
import previous_icon from '../img/icon-previous.png';
import {CalendarDayItem} from "./CalendarDayItem";
import 'bootstrap/dist/css/bootstrap.min.css';


export class Calendar extends React.Component {


    constructor(props) {
        super(props);
        this.month_dict = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const date = new Date();
        const weeks = this.prepare_calendar(date.getMonth(), date.getFullYear());
        const items = this.create_calendar_items(weeks, date, date);
        this.weeks = weeks;
        this.day_items = items;
        this.state = {
            current_date: date,
            selected_date: date,
        };
    }

    change_month(direction) {
        let new_date = direction === 1 ? this.date_of_next_month(this.state.current_date) : this.date_of_previous_month(this.state.current_date);
        this.weeks = this.prepare_calendar(new_date.getMonth(), new_date.getFullYear());
        this.day_items = this.create_calendar_items(this.weeks, new_date, this.state.selected_date);
        this.setState({
            current_date: new_date,
            selected_date: this.state.selected_date,
        });
    }

    prepare_calendar(month, year) {
        //dates of current month
        let date = new Date(year, month, 1);
        const first_day_of_month = date.getDay();
        let num_days_month = this.days_of_month(month, year);
        let weeks = [];
        let day = 1;
        let runover_row = 0;
        let runover_col = 0;
        for (let row = 0; row < 6; row++) {
            let w = [];
            for (let col = 0; col < 7; col++) {
                if (row === 0) {
                    if (col < first_day_of_month) {
                        w.push(-1);
                    } else {
                        w.push(day);
                        day++;
                    }
                } else {
                    if (day > num_days_month) {
                        day = 1;
                        runover_row = row;
                        runover_col = col;
                    }
                    w.push(day);
                    day++;
                }
            }
            weeks.push(w);
        }
        //dates of previous month
        num_days_month = this.days_of_month(date.getMonth(), date.getFullYear());
        date = this.date_of_previous_month(date);
        for (let i = 0; i < first_day_of_month; i++) {
            weeks[0][first_day_of_month - 1 - i] = num_days_month - i;
        }
        weeks.push([0, first_day_of_month, runover_row, runover_col]);
        return weeks;
    }

    //return 2d array of calendar item components given 2d array of weeks
    create_calendar_items(weeks, current_date, selected_date) {
        const runovers = weeks[6];
        let items = [];
        for (let i = 0; i < 6; i++) {
            let rows = [];
            for (let j = 0; j < 7; j++) {
                let valid = true;
                if (i < runovers[0] || (i === runovers[0] && j < runovers[1])) {
                    valid = false;
                } else if (i > runovers[2] || (i === runovers[2] && j >= runovers[3])) {
                    valid = false;
                }
                let selected = valid && selected_date.getFullYear() === current_date.getFullYear() && selected_date.getMonth() === current_date.getMonth() && weeks[i][j] === selected_date.getDate();
                rows.push([
                    <CalendarDayItem day={weeks[i][j]} valid={valid} selected={selected} onSelect={this.handleClick.bind(this, i, j)}/>
                ]);
            }
            items.push(rows);
        }
        return items;
    }

    days_of_month(month, year) {
        return new Date(year, month + 1, 0).getDate();
    }

    date_of_next_month(current_date) {
        let new_month = current_date.getMonth() + 1;
        let new_year = current_date.getFullYear();
        if (new_month >= 12) {
            new_month = 0;
            new_year += 1;
        }
        return new Date(new_year, new_month, 1);
    }

    date_of_previous_month(current_date) {
        let new_month = current_date.getMonth() - 1;
        let new_year = current_date.getFullYear();
        if (new_month <= 0) {
            new_month = 11;
            new_year -= 1;
        }
        return new Date(new_year, new_month, 1);
    }

    handleClick(row, col) {
        let new_date = new Date(
            this.state.current_date.getFullYear(),
            this.state.current_date.getMonth(),
            this.weeks[row][col]);
        this.day_items = this.create_calendar_items(this.weeks, this.state.current_date, new_date);
        this.setState({
            current_date: this.state.current_date,
            selected_date: new_date,
        });
    }

    icon_style() {
        return {
            maxHeight: '100%',
            width: 'auto',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            cursor: 'pointer',
        }
    }

    div_style() {
        return {
            padding: 'w30px',
            boxShadow: '0 3px 23px 2px rgba(222,222,222,1)',
            backgroundColor: 'white',
        }
    }

    table_style() {
        return {
            margin: '26px 24px',
        }
    }

    month_year_title_style() {
        return {
            width: '50px',
            padding: '6px 8px',
            color: '#333333',
            fontSize: '16px',
            textAlign: 'left',
            fontWeight: 'bold',
        }
    }

    td_style() {
        return {
            width: '50px',
            padding: '8px 8px',
            textAlign: 'center',
        }
    }

    th_style() {
        return {
            width: '50px',
            padding: '6px 8px',
            textAlign: 'center',
            color: '#999999',
            fontSize: '14px',
            fontWeight: 'normal',
        }
    }

    render() {
        const month = this.month_dict[this.state.current_date.getMonth()];
        const year = this.state.current_date.getFullYear();

        return <div style={this.div_style()}>
            <table style={this.table_style()}>
                <tbody>
                <tr>
                    <td colSpan={'5'} style={this.month_year_title_style()}>{month} {year}</td>
                    <td>
                        <img src={previous_icon} style={this.icon_style()} alt={'previous icon'} onClick={this.change_month.bind(this, -1)}/>
                    </td>
                    <td>
                        <img src={next_icon} style={this.icon_style()} alt={'next icon'} onClick={this.change_month.bind(this, 1)}/>
                    </td>
                </tr>
                <tr className='day-row'>
                    <th style={this.th_style()}>S</th>
                    <th style={this.th_style()}>M</th>
                    <th style={this.th_style()}>T</th>
                    <th style={this.th_style()}>W</th>
                    <th style={this.th_style()}>T</th>
                    <th style={this.th_style()}>F</th>
                    <th style={this.th_style()}>S</th>
                </tr>
                {
                    this.day_items.map((row,i) =>(
                        <tr key={i}>
                            {
                                row.map((item,j)=>
                                    <td key={j} style={this.td_style()}>
                                        {item}
                                    </td>
                                )
                            }
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    }

}
