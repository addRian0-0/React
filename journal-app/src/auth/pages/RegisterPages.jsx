import { Google } from '@mui/icons-material'
import { Link as RouterLink } from 'react-router-dom'
import { Grid, Typography, TextField, Button, Link } from '@mui/material'
import AuthLayout from '../layout/AuthLayout'

export default function RegisterPages () {
  return (
    <AuthLayout title='Register'>
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Nombre completo'
              type='text'
              placeholder='Nombre completo'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Correo'
              type='email'
              placeholder='correo@google.com'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Contrasena'
              type='password'
              placeholder='Contrasena'
              fullWidth
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button variant='contained' fullWidth>
                {' '}
                Crear cuenta{' '}
              </Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Link color='inherit' to='/auth/login' component={RouterLink}>
              ¿Ya tienes cuenta? ingresa.
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
