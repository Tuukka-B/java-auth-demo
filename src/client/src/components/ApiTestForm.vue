<template>
<h3>Input Data</h3>
<br/>
  <form id="myForm" ref="myForm">
    <!--
      - First name*
      - Last name*
      - Email of the contact*
      - Phone number
      - City
      ... 
      + Auth stuff in the end
    -->
    <label for="first-name">Name</label>
    <input type="text" id="first-name" required />
    <label for="surname">Surname</label>
    <input type="text" id="surname" required />
    <label for="email">E-mail</label>
    <input type="text" id="email" required />
    <label for="tel">Phone Number</label>
    <input type="text" id="tel" />
    <label for="city">City</label>
    <input type="text" id="city" />
    <label for="username">Username</label>
    <input type="text" id="username" value="api-user" />
    <label for="password">Password</label>
    <input type="text" id="password" value="Q29uZ3JhdHNPbkZpbmRpbmdUaGlzRWFzdGVyRWdnIQ==" />
    <input type="submit" id="submitBtn" value="SUBMIT" />
  </form>
  <div ref="results" class="results-div"
  :id="determineResultStyle()"></div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import bcrypt from 'bcryptjs';

interface ApiTestFormData {
  result: "success" | "error" | "none"
}

@Options({
  props: {
  },
})
export default class ApiTestForm extends Vue {
    data(): ApiTestFormData {   
    return {
    result: "none",

    };
  }

  msg!: string;

  async mounted(){
    let form: HTMLFormElement = this.$refs.myForm as HTMLFormElement;
    form.addEventListener("submit", async (event: Event) => {
      event.preventDefault();
      let inputs = form.querySelectorAll('input');
      let data: any = {};
      inputs.forEach((elem: HTMLInputElement) => {
        data[elem.id as string] = elem.value;
      });
      let username = (data.username as string).trim();
      let password = (data.password as string).trim();
      delete(data.username);
      delete(data.password);
      delete(data.submitBtn);
      console.log("Sent data (does not include authentication headers):");
      console.log(data);
      console.log("Authentication information will be created from the password and the username");
      this.generateMessage(username, password, data);
    })
  }

  async afterApiRequestSuccess(response: Response, resultElem: HTMLDivElement) { 
    if (response.status / 400 >= 1 ) return this.afterApiRequestFailure(response, resultElem);
        resultElem.innerHTML = "Request sent succesfully";
        (this.$data as ApiTestFormData).result = "success";
        setTimeout(() => {
          if((this.$data as ApiTestFormData).result == "success") {
          resultElem.innerHTML = ""; 
          (this.$data as ApiTestFormData).result = "none";
          }
        }, 5000);
      }

  async afterApiRequestFailure(response: Response, resultElem: HTMLDivElement) {
    let resolved_response = await response.json();
    let text = "";
    Object.entries(resolved_response).forEach((value: [string, unknown]) => {
      text += `${value[0]}: ${value[1]}<br>`;
    })
    resultElem.innerHTML = text;
    (this.$data as ApiTestFormData).result = "error";
    setTimeout(() => {
      if((this.$data as ApiTestFormData).result == "error") {
      resultElem.innerHTML = ""; 
      (this.$data as ApiTestFormData).result = "none";
      }
        }, 5000);
      
  }

  determineResultStyle(){
    switch ((this.$data as ApiTestFormData).result) {
        case "success": 
          return "api-success";
        case "error":
          return "api-error";
        case "none":
          return ;
    }
       
  }

  generateMessage(user:string, pass: string, data: Record<string, string>){
    let headers = new Headers();
    headers.set('Authorization', 'Basic ' + user + ":" + pass);
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'https://localhost:8080')
    let salt = "$2a$10$eMwbUMmFcP78eUAix65gFe"
    bcrypt.hash(pass, salt, (err: Error, hash: string) => {
      headers.set('Authorization', user + ":" + hash);
      this.sendData(headers, data)
    });     
  }

  sendData(headers: Headers, data: Record<string, string>) {
    let response = fetch("http://localhost:8080/post-data", 
      {
        method: "POST",
        mode: 'cors',
        headers: headers,
        body: JSON.stringify(data),

      })
      let resultElem = this.$refs.results as HTMLDivElement;
      response.then( async(response: Response) => {this.afterApiRequestSuccess(response, resultElem)}, async (reason: any) => {this.afterApiRequestFailure(reason, resultElem)})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
label {
  display: block;
}
input[type="text"] {
  margin-bottom: 1em;
}
#submitBtn {
  display: block;
  margin: auto auto;
}

.results-div {
  width: 30%;
  margin: 1em auto;
  padding: 1em;

}

#api-error {
  background-color: lightcoral;
  border: 1px solid black;
  border-radius: 5px;
}

#api-success {
  background-color: lawngreen;
  border: 1px solid black;
  border-radius: 5px;
}
</style>
