import React from "react";

import { List } from "semantic-ui-react";

class WorkTechMahindra extends React.Component {
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
                        Technical Associate, Sears Holdings(India) - Pune, India
                    </h2>
                    <h3 style={{ margin: 0, padding: 0 }}>
                        Jul 2012 - Sep 2015 (3 years 2 months)
                    </h3>
                    <List as="ul" style={{ marginLeft: 15 }}>
                        <List.Item as="li">
                            Understanding the requirements, preparing and
                            executing test cases.
                        </List.Item>
                        <List.Item as="li">
                            Bug reporting and tracking the reported bugs through
                            resolution.
                        </List.Item>
                        <List.Item as="li">
                            Proficient in creating and running test cases and
                            scripts, analyzing the results and reporting
                            defects.
                        </List.Item>
                        <List.Item as="li">
                            Testing – System, Acceptance, Integration,
                            Functional, UI, Regression, Automation and Smoke
                            testing
                        </List.Item>
                        <List.Item as="li">
                            Interaction with everyone across hierarchy to
                            discuss all the related issues.
                        </List.Item>
                        <List.Item as="li">
                            Participating in business sessions.
                        </List.Item>
                        <List.Item as="li">
                            Active member of the design and impact assessment
                            teams.
                        </List.Item>
                        <List.Item as="li">
                            Understand requirements & data flow. Identify
                            conditions, Design test cases, Build tests, Test
                            Execution
                        </List.Item>
                        <List.Item as="li">
                            Identifying and analyzing causes of defects and
                            other problems.
                        </List.Item>
                        <List.Item as="li">
                            Taking an active part in all Audit related
                            activities
                        </List.Item>
                        <List.Item as="li">
                            End-to-end testing of the application (Sanity,
                            Functionality, System, Regression, Automation
                            Testing)
                        </List.Item>
                    </List>
                </List.Content>
            </List.Item>
        );
    }
}

export default WorkTechMahindra;
