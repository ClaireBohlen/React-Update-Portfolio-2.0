import React from "react";
import { Button } from '../ButtonElement'


export default class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.submitForm = this.submitForm.bind(this);
      this.state = {
        status: ""
      };
    }
  
    render() {
      const { status } = this.state;
      return (
        <>
        <Container>
          <FormWrap>
            <Icon to='/'>dolla</Icon>
            <FormContent>
              <Form onSubmit={this.submitForm}
                action="https://formspree.io/f/mjvpaarg"
                method="POST">
                <FormH1>Connect with Me:</FormH1>
                <FormLabel htmlFor='for'>Name:</FormLabel>
                <FormInput type="name" name="name" required />
                <FormLabel htmlFor='for'>Email:</FormLabel>
                <FormInput type="email" name="email" required />
                <FormLabel htmlFor='for'>Message:</FormLabel>
                <FormInput type="text" name="message"required />
                {/* <FormButton type='submit'>Continue</FormButton> */}
                {status === "SUCCESS" ? <p>Thanks!</p> : <FormButton>Submit</FormButton>}
                {status === "ERROR" && <p>Ooops! There was an error.</p>} 
                {/* <Text>Forgot password</Text> */}
              </Form>
            </FormContent>
          </FormWrap>
        </Container>
      </>









        // <form
        //   onSubmit={this.submitForm}
        //   action="https://formspree.io/f/mjvpaarg"
        //   method="POST"
        // >
        //     {/* <!-- add your custom form HTML here --> */}
        //   <label>Name:</label>
        //   <input type="name" name="name" />
        //   <label>Email:</label>
        //   <input type="email" name="email" />
        //   <label>Message:</label>
        //   <input type="text" name="message" />
        //   {status === "SUCCESS" ? <p>Thanks!</p> : <Button>Submit</Button>}
        //   {status === "ERROR" && <p>Ooops! There was an error.</p>}
        // </form>



      );
    }













  
    submitForm(ev) {
      ev.preventDefault();
      const form = ev.target;
      const data = new FormData(form);
      const xhr = new XMLHttpRequest();
      xhr.open(form.method, form.action);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          form.reset();
          this.setState({ status: "SUCCESS" });
        } else {
          this.setState({ status: "ERROR" });
        }
      };
      xhr.send(data);
    }
  }