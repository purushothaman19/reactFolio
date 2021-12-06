// import React from "react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import AddProject from './NewProject';

const MySwal = withReactContent(Swal)

export const checkPassword = async () => {
    await MySwal.fire({
        title: 'Enter your password',
        input: 'password',
        showCancelButton: true,
        inputLabel: 'Password',
        inputPlaceholder: 'Enter your password',
        inputAttributes: {
            maxlength: 10,
            autocapitalize: 'off',
            autocorrect: 'off',
        },
    }).then((value) => {
        if (value.isConfirmed) {
            if (value.value === "1") {
                return MySwal.fire({html: <AddProject/>})
            } else {
                return MySwal.fire({
                    icon: 'error',
                    title: `Wrong Password`,
                })
            }
        }

    });
}

// export default Alert