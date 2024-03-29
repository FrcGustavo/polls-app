import React, { useState, useEffect, FC } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { Container, CircularProgress, Typography } from '@mui/material';
import { findOnePoll } from '../../api/polls';
import { Layout, PollForm } from '../../components';
import { BoxRoot } from './styles';

const EditPoll: FC = () => {
    const params = useParams<{ uuid?: string }>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    const [poll, setPoll] = useState<Poll>({
        uuid: '',
        title: '',
        questions: [],
    });

    useEffect(() => {
        if (params.uuid) {
            findOnePoll(params.uuid)
                .then((res) => {
                    setPoll(res);
                })
                .catch((err) => {
                    setError(Boolean(err));
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, []);

    return (
        <Layout>
            <Helmet>
                <title>Editar encuesta</title>
                <meta name="description" content="Editar una encuesta" />
            </Helmet>
            <BoxRoot>
                {loading && <CircularProgress />}
                {error && <Typography>Error</Typography>}
                {!loading && !error && (
                    <Container>
                        <PollForm poll={poll} />
                    </Container>
                )}
            </BoxRoot>
        </Layout>
    );
};

export default EditPoll;
