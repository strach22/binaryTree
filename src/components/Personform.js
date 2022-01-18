import React, { Component } from 'react'
import Button from '@mui/material/Button'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField  from '@mui/material/TextField';

export default class Personform extends Component {
    constructor(){
        super();
        this.state={
          name:'',
          age:'',
          gender:'Male'
        }
      }
    
    savePerson=()=>{
        console.log(this.state);
    }
    handleChange=e=>{
        this.setState({
            [e.target.name]:e.target.value
            
        })
    }
    render() {
        return (
            <div className="divform">
                <TextField name="name" label="Name" variant="outlined" onChange={this.handleChange}/>
                <TextField 
                    inputMode="numeric" 
                    name="age" 
                    label="Age" 
                    variant="outlined" 
                    onChange={this.handleChange}
                    />
                <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="gender"
                defaultValue={"Male"}
                onChange={this.handleChange}
                >
                <FormControlLabel value="Male" control={<Radio />} label="Male" />
                <FormControlLabel value="Female" control={<Radio />} label="Female" />
                <FormControlLabel value="Other" control={<Radio />} label="Other" />
                </RadioGroup>

                <Button variant='contained' onClick={this.savePerson}>Save</Button>
            </div>
        )
    }
}
