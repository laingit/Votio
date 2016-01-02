export default class Login extends React.Component {
  static propTypes = {
  }

  render () {
    const auth = 'Sign up or Sign in';
    return (
      <div className='container-fluid'>
        <div className='text-center'>
            <div className='btn btn-primary'>{auth} with Github</div>
            <div className='vert-space-5' />
            <div className='btn btn-primary'>{auth} with Twitter</div>
            <hr />
            <div className='btn btn-success'>{auth} with your email address</div>
        </div>
      </div>
    );
  }
}
