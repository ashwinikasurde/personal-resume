import React from "react";

import { List, Segment, Icon } from "semantic-ui-react";

import EducationDetail from "./EducationDetail";

import { segmentStyleLeft } from "./styles/default";

class EducationWrapper extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <Segment style={segmentStyleLeft}>
                <h3 style={{ margin: 0 }}>
                    <Icon name="student" size="large" /> Education
                </h3>
                <List
                    style={{
                        paddingLeft: 10,
                        marginLeft: 20
                    }}
                >
                    <EducationDetail
                        degree="Master of Engineering"
                        marks="9.0 Percentile"
                        start="Jun 2014"
                        end="May 2016"
                        institute="University of Pune, Pune, India"
                    />
                    <EducationDetail
                        degree="Bachelor of Engineering"
                        marks="Marks-71%"
                        start="Jun 2008"
                        end="May 2012"
                        institute="University of Mumbai, Mumbai, India"
                    />

                    <EducationDetail
                        degree="12th/Higher Secondary"
                        marks="Marks-78%"
                        start="Apr 2007"
                        end="Mar 2008"
                        institute="Kohlapur University, Kohlapur, India"
                    />
                </List>
            </Segment>
        );
    }
}

export default EducationWrapper;
