import React from 'react'

const ErrorComponent = ({
  statusCode
}) => {
  return (
    <div>
      {statusCode
        ? `${statusCode} 에러 on server`
        : '에러 on client'}
    </div>
  )
}

export default ErrorComponent
