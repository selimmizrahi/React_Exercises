import React from "react"


class ServiceContent extends React.Component{
    constructor(props){
    super(props)
    }

    render(){
        return(
            <div className = "BodyContent">{this.props.children}
                    <div className ="Body1">
                        <h1 className = "BodyTitle">{this.props.title}</h1>
                        <p className = "BodyText"> Our Vision is simple we want to create <br></br>websites and applications with both hight
                            quality design and easy to access content. <br></br>The finished product will
                             be totally unique and represent awsomeness</p>
                    </div>
            </div>
        )

    }
}


export default ServiceContent;