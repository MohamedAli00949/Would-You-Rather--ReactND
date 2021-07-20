import React from 'react'

class PageNotFound extends React.Component {
    render() {
        return (
            <div>
                <title>PageNotFound</title>
                <div style={{
                    textAlign: 'center',
                }}>
                    <h1 style={{
                        color: '#ff0',
                        fontFamily: 'fantasy'
                    }} >
                        404 ERROR
                    </h1>
                    <h3>Sorry, This Page Not Found</h3>
                </div>
            </div>
            
        )
    }
}

export default PageNotFound