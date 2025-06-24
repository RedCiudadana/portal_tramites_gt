import { useState } from 'react';
import {
  Box,
  IconButton,
  TextField,
  Paper,
  Typography,
  Fade,
  Button,
} from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import tramites from '../data/tramites.json';

export default function ChatBot() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [modo, setModo] = useState('menu'); // 'menu' | 'busqueda'

    const menuOpciones = [
        'Buscar un trámite',
        'Recomendaciones de uso de la plataforma',
        'Contactar con soporte',
    ];

    const mostrarMenu = () => ({
        type: 'bot',
        text: (
        <Box>
            <Typography variant="body2" fontWeight="bold">
            ¿Qué deseas hacer?
            </Typography>
            {menuOpciones.map((opcion, index) => (
            <Typography key={index} variant="body2">
                {index + 1}. {opcion}
            </Typography>
            ))}
            <Typography variant="body2" sx={{ mt: 1 }}>
            Escribe el número de la opción.
            </Typography>
        </Box>
        ),
    });

    const handleToggle = () => {
        setOpen(!open);
        setMessages([
        { type: 'bot', text: '¡Hola! Soy tu asistente virtual.' },
        mostrarMenu(),
        ]);
        setInput('');
        setModo('menu');
    };

    const normalize = (str) =>
        str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    const handleSend = () => {
        if (!input.trim()) return;
      
        const trimmed = input.trim();
        const userMessage = { type: 'user', text: trimmed };
        let updatedMessages = [...messages];
      
        if (modo === 'menu') {
            updatedMessages.push(userMessage);
        
            if (trimmed === '1') {
                updatedMessages.push({
                type: 'bot',
                text: (
                    <Box>
                    <Typography variant="body2" fontWeight="bold">
                        Buscar un trámite
                    </Typography>
                    <Typography variant="body2">
                        Por favor, escribe el nombre del trámite que estás buscando.
                    </Typography>
                    </Box>
                ),
                });
                setModo('busqueda');
            } else if (trimmed === '2') {
                updatedMessages.push({
                type: 'bot',
                text: (
                    <Box>
                    <Typography variant="body2" fontWeight="bold">
                        Recomendaciones de uso
                    </Typography>
                    <Typography variant="body2">
                        Puedes explorar los servicios por categoría, institución o usando la barra de búsqueda en la parte superior.
                    </Typography>
                    </Box>
                ),
                });
                updatedMessages.push(mostrarMenu());
            } else if (trimmed === '3') {
                updatedMessages.push({
                type: 'bot',
                text: (
                    <Box>
                    <Typography variant="body2" fontWeight="bold">
                        Contactar con soporte
                    </Typography>
                    <Typography variant="body2">
                        Para soporte técnico, por favor escribe a <b>info@redciudadana.org</b> o usa nuestro formulario de contacto.
                    </Typography>
                    </Box>
                ),
                });
                updatedMessages.push(mostrarMenu());
            } else {
                updatedMessages.push({
                type: 'bot',
                text: 'Opción no reconocida. Intenta con 1, 2 o 3.',
                });
                updatedMessages.push(mostrarMenu());
            }
        
            setMessages(updatedMessages);
            }
        
            if (modo === 'busqueda') {
            updatedMessages.push(userMessage);
        
            const query = normalize(trimmed);
            const coincidencias = tramites
                .filter((t) => normalize(t.nombre).includes(query))
                .slice(0, 3);
        
            const respuesta =
                coincidencias.length > 0
                ? {
                    type: 'bot',
                    text: (
                        <>
                        Aquí tienes algunos servicios que podrían interesarte:
                        <Box mt={1}>
                            {coincidencias.map((tramite) => (
                            <Button
                                key={tramite.id}
                                href={`/categoria/${tramite.categoria}/tramite/${tramite.id}`}
                                component="a"
                                fullWidth
                                sx={{
                                mt: 1,
                                backgroundColor: '#f0f0f0',
                                textTransform: 'none',
                                justifyContent: 'flex-start',
                                '&:hover': {
                                    backgroundColor: '#e0e0e0',
                                },
                                }}
                            >
                                {tramite.nombre}
                            </Button>
                            ))}
                        </Box>
                        </>
                    ),
                    }
                : {
                    type: 'bot',
                    text:
                        'Lo siento, no encontré coincidencias. ¿Podrías intentar con otra palabra?',
                    };
        
            updatedMessages.push(respuesta);
            updatedMessages.push(mostrarMenu());
            setModo('menu');
            setMessages(updatedMessages);
        }
      
        setInput('');
    };
      

    return (
        <>
        <IconButton
            onClick={handleToggle}
            sx={{
            position: 'fixed',
            padding: '12px',
            bottom: 90,
            right: 24,
            zIndex: 1500,
            backgroundColor: '#0089df',
            color: 'white',
            '&:hover': { backgroundColor: '#03506f' },
            }}
        >
            {open ? <CloseIcon /> : <ChatIcon />}
        </IconButton>

        <Fade in={open}>
            <Paper
            elevation={6}
            sx={{
                position: 'fixed',
                bottom: 150,
                right: 24,
                width: 340,
                height: 460,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                p: 2,
                borderRadius: 2,
                zIndex: 1400,
                overflow: 'hidden',
            }}
            >
            <Box
                sx={{
                overflowY: 'auto',
                flexGrow: 1,
                pr: 1,
                mb: 2,
                }}
            >
                {messages.map((msg, i) => (
                <Box
                    key={i}
                    sx={{
                    display: 'flex',
                    justifyContent: msg.type === 'user' ? 'flex-end' : 'flex-start',
                    mb: 1,
                    }}
                >
                    <Box
                    sx={{
                        backgroundColor:
                        msg.type === 'user' ? '#02324F' : '#f0f0f0',
                        color: msg.type === 'user' ? 'white' : 'black',
                        p: 1.2,
                        px: 2,
                        borderRadius: 2,
                        maxWidth: '80%',
                    }}
                    >
                    {typeof msg.text === 'string' ? (
                        <Typography variant="body2">{msg.text}</Typography>
                    ) : (
                        msg.text
                    )}
                    </Box>
                </Box>
                ))}
            </Box>

            <Box sx={{ display: 'flex', gap: 1 }}>
                <TextField
                fullWidth
                variant="outlined"
                size="small"
                placeholder="Escribe tu mensaje"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                />
                <IconButton color="primary" onClick={handleSend}>
                <SendIcon />
                </IconButton>
            </Box>
            </Paper>
        </Fade>
        </>
    );
}
