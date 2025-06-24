import { useEffect, useState } from 'react';
import { Fab, Zoom } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function GoToTopButton() {
    const [visible, setVisible] = useState(false);

    const handleScroll = () => {
        setVisible(window.scrollY > 300);
    };

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Zoom in={visible}>
            <Fab
                color="primary"
                size="medium"
                onClick={scrollToTop}
                sx={{
                position: 'fixed',
                bottom: 24,
                right: 24,
                zIndex: 1500,
                backgroundColor: '#0089df',
                color: 'white',
                '&:hover': {
                    backgroundColor: '#03506f',
                },
                }}
            >
                <KeyboardArrowUpIcon />
            </Fab>
        </Zoom>
    );
}
