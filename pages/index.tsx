import React from 'react';
import Iam from '../components/Iam'


const Index = (props: any ) => {
  return (
      {props.test}
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      test: 'test'
    }
  }
}

export default Index;