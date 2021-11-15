import { Component } from "react";
import getData from "../service/service";


export default class TestComponent extends Component{
    constructor(props){
        super(props);
        this.state= {
            record:[]
        }
    }

     componentDidMount(){
         
         if (this.props.user != null) {
             this.setState({ record: this.props.user })

         } else {
             getData().then((result) => {
                 this.setState({ record: result })
             });
         }

        // getData().then((result)=>{
        //      console.log(result);
        //  });
        //  getRecrds.then((result) =>
        //  {
        //      console.log("$$$$" + JSON.stringify(result))
        //  })
        //  getRecrds.then((res)=>{
        //      console.log(JSON.stringify(res));
        //  })
        //  getRecrds.then((records)=>{
        //         console.log("result JSON" + JSON.stringify(records));
        //         this.setState({record:records});
        //     })
            // fetch('https://jsonplaceholder.typicode.com/users')
            // .then(res => res.json())
            // .then(result =>{
            //  this.setState({record:result})
            // })

    }

    render(){
        return(
            <div>
                Hi how are you?
                {this.renderList()}
            </div>
        )
    }

    renderList() {
        if(this.state.record)
        {
            if (this.state.record.length > 0) {
               return(this.state.record.map((item, index) => {
                    return (
                        <ul key={index}>
                            <li>{item.company.name}</li>
                        </ul>
                    )
                }))
    
            }
        }
    }

}