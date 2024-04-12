import {
    Button,
    Container,
    Grid,
    TextField,
    Typography
} from "@mui/material";
import React, {useState} from "react";
import {UrlMutation} from "../types";



interface Props {
    onSubmit: (url:UrlMutation) => void
}

const Form:React.FC<Props> = ({onSubmit}) => {

    const [url, setUrl] = useState<UrlMutation>({
        originalUrl: '',
        shortUrl: ''
    });
    const [shortUrl, setShortUrl] = useState(false);

    const onSubmitUrl = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(url);
        if (url.originalUrl === '') {
            return shortUrl
        }
        setShortUrl(!shortUrl);
    }

    const inputChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const{value} = e.target
        setUrl(prevState => {
            return {...prevState, originalUrl: value, shortUrl: crypto.randomUUID().toString().substring(0, 6)};
        });
    }

    return (
        <Container maxWidth='md'>
            <form onSubmit={onSubmitUrl}>
                <Grid sx={{textAlign: 'center'}}>
                    <Typography variant='h4' sx={{mb: 8, mt: 14}}>Shorten your link</Typography>
                    <Grid sx={{mb: 2,}}>
                        <TextField
                            sx={{width: 700}}
                            type='url'
                            id="originalUrl" label="Enter your url here"
                            value={url.originalUrl}
                            onChange={inputChangeHandler}
                            name="originalUrl"
                            required
                        />
                    </Grid>
                    <Grid>
                        <Button type="submit" color="primary" variant="contained">Shorten</Button>
                    </Grid>
                    {shortUrl ?
                    <Grid sx={{mt: 6}}>
                        <Typography variant='h5' sx={{mb: 3}}>Your link now looks like this</Typography>
                        <a href={url.originalUrl} target='_blank'>http://localhost:8000/{url.shortUrl}</a>
                    </Grid> : ''
                    }
                </Grid>
            </form>
        </Container>
    );
};

export default Form;