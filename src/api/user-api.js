import { ApiConfig } from "./api-config"


export class UserApi {
    //  create user
    async AddPhoneNumber(obj) {
        // make the api
        console.log("obj", obj)
        let data = {
            // otp: obj.otp,
            phonenumber: obj.phoneNumber,
            r: 'oemrpharmacy/formulary/formularygenerateotp'
        }
        // console.log(data.phonenumber)
        // console.log("DATA", ApiConfig.url + '&phonenumber=' + obj.phonenumber)
        // console.log("DATA", ApiConfig.url)
        const response = await fetch(ApiConfig.url + '&r=' + data.r + '&phonenumber=' + obj.phonenumber, {
            method: "GET",
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }),
            // body: JSON.stringify({
            //     emailAddress: obj.emailAddress,
            //     password: obj.password,
            //     Cpassword: obj.Cpassword,
            // }),
        })
        // transform the data into the format we are expecting
        try {

            console.log('response ==>', response)
            if (response.status == true) {
                let result = await response.json()
                console.log("we here in api", result)
                return result

            } else {
                let result = await response.json()
                // console.log("we here result", result)
                return result

            }

        } catch (error) {
            return error
        }
    }


    async VerifyOtp(obj) {
        // make the api
        console.log("obj", obj)
        let data = {
            otp: obj.otp,
            phonenumber: obj.phonenumber,
            r: 'oemrpharmacy/formulary/formularyverifyotp'
        }
        const response = await fetch(ApiConfig.url + '&r=' +
            data.r + '&phonenumber=' +
            obj.phonenumber + '&otp=' +
            data.otp, {

            method: "GET",
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }),
            // body: JSON.stringify({
            //     emailAddress: obj.emailAddress,
            //     password: obj.password,
            //     Cpassword: obj.Cpassword,
            // }),
        })
        // transform the data into the format we are expecting
        try {

            console.log('response OTP==>', response)
            if (response.status == true) {
                let result = await response.json()
                console.log("we here in api OTP", result)
                return result

            } else {
                let result = await response.json()
                // console.log("we here result", result)
                return result

            }

        } catch (error) {
            return error
        }
    }
}