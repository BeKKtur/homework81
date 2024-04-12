import {useAppDispatch} from "../app/hooks";
import {UrlMutation} from "../types";
import {postUrl} from "../store/urlThunk";
import {Container} from "@mui/material";
import Form from "./Form";

const SubmitForm = () => {

    const dispatch = useAppDispatch();
    const onFormSubmit = async (urlMutation:UrlMutation) => {
        await dispatch(postUrl(urlMutation))
    }

    return (
        <Container maxWidth='md'>
                <Form onSubmit={onFormSubmit}/>
        </Container>
    );
};

export default SubmitForm;