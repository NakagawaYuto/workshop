import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

import '../css/HomePage.css';

const BlogEditButton = () => {
  const navigate = useNavigate();
  return (
    <>
      <IconButton 
        edge='start' 
        color='inherit' 
        aria-label='menu' 
        className="IconRapper"
        style={{
          background: '#607d8b',
          borderRadius: '50',
          position: 'fixed',
          bottom: 50,
          right: 50
        }}
        onClick={() => { navigate('/edit')}}
      >
        <EditIcon 
          fontSize='large'
          className="BlogAddIcon"
          style={{
            color: '#eceff1',
            width: 50,
            height: 50
          }}
        />
      </IconButton>
    </>
  )
}

export default BlogEditButton;