import resumeTemplates from "../Data";
import { Grid, Card, CardMedia, Typography, Box } from "@mui/material";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedTemplate } from "../action/action";

const Home = () => {

  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleTemplateClick = (template) => {
    dispatch(setSelectedTemplate(template.role));
    navigate("/details");
  };

  return (
    <div style={{ padding: "2rem" }}>
      {/* Heading */}
      <Box textAlign="center" mb={{ xs: 2, sm: 3, md: 4 }}>
        <Typography 
          variant="h4" 
          gutterBottom
          sx={{ 
            fontSize: { xs: '1.75rem', sm: '2.125rem', md: '2.5rem' },
            fontWeight: 'bold'
          }}
        >
          Templates
        </Typography>
        <Typography 
          variant="body1" 
          gutterBottom
          sx={{ 
            fontSize: { xs: '0.875rem', sm: '1rem' },
            color: 'text.secondary'
          }}
        >
          Select a Template to get Started
        </Typography>
      </Box>

      {/* Templates Grid */}
      <Container
        maxWidth="xl"
        sx={{ 
          padding: { xs: "1rem", sm: "2rem", md: "4rem" }, 
          display: "flex", 
          justifyContent: "center" 
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, sm: 4, md: 7 }}
          justifyContent="center"
        >
          {resumeTemplates.map((template) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={template.id}
              className=" relative cursor-pointer group"
              onClick={() => handleTemplateClick(template)}
              
            >
              <Card sx={{ 
                height: '100%',
                '&:hover': {
                  transform: { xs: 'none', sm: 'translateY(-4px)' },
                  transition: 'transform 0.3s ease'
                }
              }}>
                <CardMedia
                  component="img"
                  sx={{ 
                    height: { xs: 250, sm: 300, md: 400 }, 
                    objectFit: "cover" 
                  }}
                  image={template.image}
                  alt={template.title}
                />
              </Card>
              <Typography 
                variant="h6" 
                className="mt-3 text-center font-sm text-gray-800"
                sx={{ 
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                  fontWeight: 'medium'
                }}
              >
                {template.title}
              </Typography>
              
              <Box
                className={`absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm border-2 border`}
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  borderColor: 'primary.main'
                }}
              >
                <Typography 
                  variant="button" 
                  className="text-black"
                  sx={{ 
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                    fontWeight: 'bold'
                  }}
                >
                  Use Template
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
