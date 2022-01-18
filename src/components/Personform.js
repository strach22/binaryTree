import React, { Component } from 'react'
import Button from '@mui/material/Button'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField  from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default class Personform extends Component {
    constructor(){
        super();
        this.state={
            code:"1.2.1",
            name:'',
            age:'',
            gender:'Male',
            data:[{code:"1",name:'Francisco',age:'20',gender:'Male'},{code:"1.1",name:'Daniela',age:'22',gender:'Female'}]
        }
      }
    
    savePerson=()=>{
        console.log(this.state);
        fetch('/api/person',{
            method:'POST',
            body:JSON.stringify(this.state),
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
        .then(res=>res.json())
        .then(data=>{
            alert("Team Worked Saved!");
            this.setState({
                name:'',
                age:'',
              });
              this.fetchPeople();
        })
        .catch(err=>{
            console.log(err)
            alert("Try again please");
        })
    }

    fetchPeople(){
        fetch('/api/person')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            this.setState({data:data})
        });
    }
    componentDidMount(){
        this.fetchPeople()
    }

    handleChange=e=>{
        this.setState({
            [e.target.name]:e.target.value
            
        })
    }
    render() {
        return (
            <div>
                <div className="divform">
                    <TextField 
                        name="name" 
                        label="Name" 
                        variant="outlined" 
                        onChange={this.handleChange}
                        value={this.state.name}
                    />
                    <br/>
                    <TextField 
                        inputMode="numeric" 
                        name="age" 
                        label="Age" 
                        variant="outlined" 
                        onChange={this.handleChange}
                        value={this.state.age}
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
                    <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="level"
                    defaultValue={"base"}
                    onChange={this.handleChange}
                    >
                    <FormControlLabel value="base" control={<Radio />} label="Base" />
                    <FormControlLabel value="dependent" control={<Radio />} label="Dependent" />
                    </RadioGroup>

                    <Button variant='contained' onClick={this.savePerson}>Save</Button>
                </div>
                <br/>
                <br/>
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="Data Base">
                    <TableHead>
                    <TableRow>
                        <TableCell>Code</TableCell>
                        <TableCell align="right">name</TableCell>
                        <TableCell align="right">Age</TableCell>
                        <TableCell align="right">Gender</TableCell>
                        <TableCell align="right">Leader</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.state.data.map((row) => (
                        <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.code}
                        </TableCell>
                        <TableCell align="right">{row.name}</TableCell>
                        <TableCell align="right">{row.age}</TableCell>
                        <TableCell align="right">{row.gender}</TableCell>
                        <TableCell align="right">{row.leader}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </div>
        )
    }
}
