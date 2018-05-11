import React from "react";

import { List } from "semantic-ui-react";

class WorkWipro extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <List.Item>
                <List.Content
                    style={{
                        paddingLeft: 10,
                        marginTop: 15
                    }}
                >
                    <h2
                        style={{
                            margin: 0,
                            padding: 0,
                            fontSize: 22
                        }}
                    >
                        Data Test Analyst, Accenture Service Pvt. Ltd. - Pune,
                        India
                    </h2>
                    <h3 style={{ margin: 0, padding: 0 }}>
                        Sep 2015 - Sep 2017 (2 years)
                    </h3>
                    <List as="ul" style={{ marginLeft: 15 }}>
                        <List.Item as="li">
                            Responsible for writing the Test Specifications, SQL
                            Scripts from Design Document
                        </List.Item>
                        <List.Item as="li">
                            Involved in E2E testing team to ensure satisfactory
                            service delivery to end customers
                        </List.Item>
                        <List.Item as="li">
                            Involved in test execution, test planning activities
                            and creation of high level and detailed test cases
                        </List.Item>
                        <List.Item as="li">
                            Performed Database, Functional and Regression
                            testing
                        </List.Item>
                        <List.Item as="li">
                            Performed Sanity Checks as well as Network Health
                            Check-ups
                        </List.Item>
                        <List.Item as="li">
                            Responsible for writing the SQL queries for the
                            testing to validate data from source to target
                            database and then reporting tool
                        </List.Item>
                        <List.Item as="li">
                            Report the deviations through QC and update the
                            status as when required
                        </List.Item>
                        <List.Item as="li">
                            Responsible for the identification and availability
                            of test data
                        </List.Item>
                        <List.Item as="li">
                            Used HP Quality Centre (ALM) for Bug tracking and
                            Test Management
                        </List.Item>
                    </List>
                </List.Content>
            </List.Item>
        );
    }
}

export default WorkWipro;
