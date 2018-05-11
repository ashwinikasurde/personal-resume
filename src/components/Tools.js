import React from 'react';

import { Segment, Icon, List } from "semantic-ui-react";

import { segmentStyleLeft } from "./styles/default";

class Tools extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <Segment style={segmentStyleLeft}>
                <h3 style={{ margin: 0 }}>
                    <Icon name="configure" size="large" /> Skills
                </h3>
                <List
                    style={{
                        paddingLeft: 10,
                        marginLeft: 20
                    }}
                >
                    <List as="ul" style={{ marginLeft: 15 }}>
                        <List.Item as="li">
                            <b>Software Testing</b> - ETL testing, Automation testing, Data Analysis , Data Validation , Source system analysis and Data model understanding ,All Aspects QA/QA methodology and SDLC/STLC processes conforming to CMM/ISO standards, manual/automation testing
                        </List.Item>
                        <List.Item as="li">
                            <b>Databases/Filesystems</b> - Relational(MySQL, Oracle), Redshift, Hive, Impala, Hadoop file system
                        </List.Item>
                        <List.Item as="li">
                                <b>ETL Tools</b> - Talend, Informatica
                        </List.Item>
                        <List.Item as="li">
                            <b>Programming Languages</b> - C, C++, Java, HTML, Selenium programming
                        </List.Item>
                        <List.Item as="li">
                            <b>Operating Systems</b> - Windows, Linux/Unix
                        </List.Item>
                        <List.Item as="li">
                            <b>Automation Tools</b> - Selenium WebDriver
                        </List.Item>
                        <List.Item as="li">
                            <b>Processes</b> - Agile Model, V- Model, Waterfall model
                        </List.Item>
                        <List.Item as="li">
                            <b>Test Management Tools</b> - Quality Control 9.2, Atlassian JIRA
                        </List.Item>
                    </List>
                </List>
            </Segment>
        );
    }

}

export default Tools;
