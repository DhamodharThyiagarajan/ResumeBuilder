import React from 'react'
import { useSelector } from 'react-redux'
import { Card, CardContent, Typography, Container, Grid, Box, Button } from '@mui/material'
import { Download, Delete } from '@mui/icons-material'

const MyResumes = () => {
  const { savedResumes } = useSelector((state) => state)

  const handleDownload = (resume) => {
    alert(`Downloading ${resume.resumeName}.pdf`)
  }

  const handleDelete = (id) => {
    alert(`Deleted resume with ID: ${id}`)
  }

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 2, sm: 3, md: 4 } }}>
      <Box mb={{ xs: 2, sm: 3, md: 4 }}>
        <Typography 
          variant="h4" 
          component="h1" 
          gutterBottom 
          sx={{ 
            fontWeight: 'bold', 
            color: '#f74904',
            fontSize: { xs: '1.75rem', sm: '2.125rem', md: '2.5rem' }
          }}
        >
          My Resumes
        </Typography>
        <Typography 
          variant="body1" 
          color="textSecondary"
          sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
        >
          Manage your saved resumes
        </Typography>
      </Box>

      {savedResumes && savedResumes.length > 0 ? (
        <Grid container spacing={{ xs: 2, sm: 3 }}>
          {savedResumes.map((resume) => (
            <Grid item xs={12} sm={6} lg={4} key={resume.id}>
              <Card sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                boxShadow: 2,
                '&:hover': {
                  boxShadow: 6,
                  transform: { xs: 'none', sm: 'translateY(-4px)' },
                  transition: 'all 0.3s ease'
                }
              }}>
                <CardContent sx={{ flexGrow: 1, p: { xs: 2, sm: 3 } }}>
                  <Typography 
                    variant="h6" 
                    component="div" 
                    sx={{ 
                      fontWeight: 'bold', 
                      mb: 1, 
                      color: '#ee4806',
                      fontSize: { xs: '1.1rem', sm: '1.25rem' }
                    }}
                  >
                    {resume.firstName} {resume.lastName}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="textSecondary" 
                    sx={{ 
                      mb: 2,
                      fontSize: { xs: '0.875rem', sm: '0.9rem' }
                    }}
                  >
                    <strong>File:</strong> <span style={{ color: 'red' }}>{resume.resumeName}</span>
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="textSecondary" 
                    sx={{ 
                      mb: 1,
                      fontSize: { xs: '0.875rem', sm: '0.9rem' }
                    }}
                  >
                    <strong>Template:</strong> {resume.template}
                  </Typography>
                  <Typography 
                    variant="caption" 
                    color="textSecondary"
                    sx={{ fontSize: { xs: '0.75rem', sm: '0.8rem' } }}
                  >
                    <strong>Created:</strong> {resume.createdDate}
                  </Typography>
                </CardContent>
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 1, 
                  p: { xs: 2, sm: 3 }
                }}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    startIcon={<Download />}
                    onClick={() => handleDownload(resume)}
                    sx={{ 
                      flex: { xs: 'none', sm: 1 },
                      fontSize: { xs: '0.875rem', sm: '0.9rem' }
                    }}
                  >
                    Download
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    startIcon={<Delete />}
                    onClick={() => handleDelete(resume.id)}
                    sx={{ 
                      flex: { xs: 'none', sm: 1 },
                      fontSize: { xs: '0.875rem', sm: '0.9rem' }
                    }}
                  >
                    Delete
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box sx={{ 
          textAlign: 'center', 
          py: { xs: 4, sm: 6, md: 8 },
          px: { xs: 2, sm: 3 },
          backgroundColor: '#f5f5f5',
          borderRadius: 2,
          mx: { xs: 2, sm: 0 }
        }}>
          <Typography 
            variant="h6" 
            color="textSecondary" 
            gutterBottom
            sx={{ fontSize: { xs: '1.1rem', sm: '1.25rem' } }}
          >
            No resumes saved yet
          </Typography>
          <Typography 
            variant="body2" 
            color="textSecondary"
            sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
          >
            Create and save your first resume to see it here
          </Typography>
        </Box>
      )}
    </Container>
  )
}

export default MyResumes
