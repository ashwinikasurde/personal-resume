import React from "react";

import { List } from "semantic-ui-react";

class Work1 extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <List.Item>
                <List.Content style={{ paddingLeft: 10 }}>
                    <h2
                        style={{
                            margin: 0,
                            padding: 0,
                            fontSize: 22
                        }}
                    >
                        Data Analyst, Prudential PLC. - Reading, United Kingdom
                    </h2>
                    <h3 style={{ margin: 0, padding: 0 }}>
                        Sep 2017 - Till date (9 months)
                    </h3>
                    <List as="ul" style={{ marginLeft: 15 }}>
                        <List.Item as="li">
                            Responsible for understanding different source
                            systems
                        </List.Item>
                        <List.Item as="li">
                            Responsible for writing the SQL validation Scripts
                            for testing the user stories from Design Document
                        </List.Item>
                        <List.Item as="li">
                            Responsible for writing regression scripts using
                            Oracle.
                        </List.Item>
                        <List.Item as="li">
                            Responsible for the running regression pack after
                            every deployment and anlysising the fails scripts
                        </List.Item>
                        <List.Item as="li">
                            Responsible for modifying the assigned regression
                            script after every sprint
                        </List.Item>
                        <List.Item as="li">
                            Responsible for attending the daily scrum meeting,
                            Involved in sprint planning and retrospective
                            meetings
                        </List.Item>
                        <List.Item as="li">
                            Responsible for writing the SQL queries for the
                            testing to validate data from source to target
                            database and then reporting tool.
                        </List.Item>
                        <List.Item as="li">
                            Responsible for defect tracking and reporting
                        </List.Item>
                        <List.Item as="li">
                            Responsible for defect management cycle and
                            retesting the defect.
                        </List.Item>
                    </List>
                </List.Content>
            </List.Item>
        );
    }
}

export default Work1;
