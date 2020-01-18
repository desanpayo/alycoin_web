import React from 'react';
import swal from 'sweetalert';
import { Redirect } from 'react-router-dom';

const timer = ({ minutes, seconds, completed }) => {
    if (completed) {
      swal({
            title: "Error",
            text: "El tiempo ha finalizado, la orden ha sido cancelada.",
            icon: "error"
        })
        return <Redirect to={`/backoffice/package`} />
        
    } else {
      return (
        <span style={{color: '#fff'}}>
            { minutes }:{ seconds }
        </span>
      );
    }
  };

  export default timer;