import React from "react";

import { Segment, Icon, List } from "semantic-ui-react";

import { segmentStyleLeftFirst } from "./styles/default";

class Profile extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <Segment style={segmentStyleLeftFirst}>
                <h3 style={{ margin: 0 }}>
                    <Icon name="user" size="large" /> Profile
                </h3>
                <List
                    style={{
                        paddingLeft: 10,
                        marginLeft: 15
                    }}
                >
                    <List.Item>
                        <List.Content style={{ paddingLeft: 10 }}>
                            <p>
                                I am certified ISTQB professional having 5+ years of IT experience with key focus on Software Testing to deliver cost effective deliverables.
                                <br />
                                <br />
                                My work areas and key responsibilities include:
                            </p>
                            <ul style={{ marginLeft: -25 }}>
                                <li style={{ marginBottom: 5 }}>
                                    5+ Years of experience in Testing with processes like Big Data Testing, ETL Testing, Integration Testing, Script Testing, Test User Stories, Functional Testing, Automated/Manual Testing, etc.
                                </li>
                                <li style={{ marginBottom: 5 }}>
                                    Experience in Functional, Integration, Database testing, GUI, Sanity and Regression Testing
                                </li>
                                <li style={{ marginBottom: 5 }}>
                                    Experience with various databases/tools like Hadoop, Spark, Redshift, Relational Databases(Oracle, MySQL, MongoDB), Talend
                                </li>
                                <li style={{ marginBottom: 5 }}>
                                    Exposure to domain knowledge in the areas of Banking and Financial Services, Retail and Telecom.
                                </li>
                                <li style={{ marginBottom: 5 }}>
                                    Preparation of smoke and regression test suites, executing them and publishing results with the stakeholders
                                </li>
                                <li style={{ marginBottom: 5 }}>
                                    Strong delivery experience and capability to handle multiple projects at the same time.
                                </li>
                                <li style={{ marginBottom: 5 }}>
                                    Ownership of Testing processes and ensuring quality of deliverabels.
                                </li>
                                <li style={{ marginBottom: 5 }}>
                                    Managing stackeholder expectations.
                                </li>
                            </ul>
                        </List.Content>
                    </List.Item>
                </List>
            </Segment>
        );
    }
}

export default Profile;
