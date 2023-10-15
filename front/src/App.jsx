import { Routes, Route } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useNavigate } from 'react-router-dom';

import './css/App.css';

import HomePage from './components/HomePage';
import EditPage from './components/EditPage';
import BlogPage from './components/BlogPage';
import NotFound from "./components/NotFoundPage"; 

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <AppBar position='sticky' style={{ color: "#e0f2f1", backgroundColor: "#3c3c3c" }} >
        <Toolbar variant='dense'>
          <IconButton edge='start' color='inherit' aria-label='menu' onClick={() => { navigate('/')}}>
            <MenuBookIcon/>
          </IconButton>
          <Typography variant='h6' color='inherit' style={{ fontFamily:'serif' }}>
            本
          </Typography>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/edit" element={<EditPage />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
