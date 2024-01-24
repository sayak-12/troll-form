import { useState, useEffect } from "react";

const PasswordComponent = () => {
  const [lengtherror, setLengtherror] = useState(null);
  const [success, setSuccess] = useState(null);
  const passwordcheck = (e) => {
    setLengtherror(null);
    setSuccess(null)
    const value = e.target.value;
    if (value.length > 0 && value.length < 8) {
      setLengtherror("Character must be at least 8 characters");
    } else {
      setLengtherror(null);
      const regex = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      if (!regex.test(value)) {
        setLengtherror("Must contain atleast one small and one capital letter");
      } else {
        setLengtherror(null);
        const regex =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/;
        if (!regex.test(value)) {
          setLengtherror("Must contain atleast one symbol and one number");
        } else {
          setLengtherror(null);
          const regex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-])(?!.*(\d{2}|[a-zA-Z]{2}|[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]{2})).{8,}$/;
          if (!regex.test(value)) {
            setLengtherror(
              "Must not contain two symbols/two letters/two numbers together"
            );
          }
          else{
                setLengtherror(null)
                const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-])(?!.*(\d{2}|[a-zA-Z]{2}|[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]{2})).*T@h@e@d@e@v@e@l@o@p@e@r@i@s@G@o@d$/;
                if (!regex.test(value)) {
                    setLengtherror(
                      "conclude the password with 'T@h@e@d@e@v@e@l@o@p@e@r@i@s@G@o@d' and we'll let you pass..."
                    );
                  }
                  else{
                    setLengtherror(null)
                    setSuccess("Hmm, unbreakable spirit? Will let you pass, but Good luck remembering that!")
                  }

          }
        }
      }
    }
  };
  return (
    <div className="passdiv">
      <input type="text" name="" id="password" onChange={passwordcheck} />
      <br />
      {lengtherror && <span className="error">{lengtherror}</span>}
      {success && <span className="success">{success}</span>}
    </div>
  );
};

export default PasswordComponent;
