import React from "react"

class Class extends React.Component
{
    render()
    {
        console.log("Inside render")
        return(
            <Mycomp/>
        );
    }

    constructor()
    {
        super()
        console.log("Inside constructor");
    }

    componentDidMount()
    {
        console.log("Inside  componentDidMount");
    }

    componentDidUpdate()
    {
        console.log("Inside  componentDidUpdate");
    }

    componentWillUnmount()
    {
        console.log("Inside componentWillUnmount");
    }
}

function Mycomp()
{
    return(
        <h1>Inside Mycomp</h1>
    )
}