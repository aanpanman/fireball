import React, { useEffect, useState } from 'react';
import { Avatar, CircularProgress, Grid, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import classNames from 'classnames';

import GotchiSvg from 'components/Gotchi/GotchiSvg';
import Subtitle from 'components/Subtitle/Subtitle';
import thegraph from 'api/thegraph.api';
import { gotchiByIdQuery } from 'api/common/queries';
import hopeUp from 'assets/images/gotchi-placeholder-up.svg';

import styles from './styles';

const gotchiesId = [4285, 8005, 4282, 23470, 13998];

export default function Team() {
    const classes = styles();
    const [dataSpinner, setDataSpinner] = useState(true);
    const [members, setMembers] = useState([]);

    useEffect(() => {
        thegraph.getJoinedData([
            gotchiByIdQuery(gotchiesId[0]),
            gotchiByIdQuery(gotchiesId[1]),
            gotchiByIdQuery(gotchiesId[2]),
            gotchiByIdQuery(gotchiesId[3]),
            gotchiByIdQuery(gotchiesId[4])
        ]).then((response) => {
            let formattedArray = [];

            response.forEach((gotchi) => {
                formattedArray.push(gotchi.data.aavegotchi);
            });

            setMembers(formattedArray);
            setDataSpinner(false);
        }).catch((error) => console.log(error));
    }, []);

    return (
        <Box>
            <Grid container justifyContent='center'>
                <Grid item xs={12} md={10}>
                    <Subtitle variant='h4' innerBg='rgb(39, 42, 48)' margin='0 0 40px'>
                        ordenGG DAO
                    </Subtitle>
                </Grid>
            </Grid>

            <Grid container justifyContent='center'>
                {dataSpinner ? (
                    <CircularProgress component='span' color='primary' size={22}/>
                ) : (
                    <>
                        {
                            members.map( (gotchi, index) => (
                                <Grid item xs={6} sm={4} md={2} key={index}>
                                    <Link href={`https://app.aavegotchi.com/gotchi/${gotchi.id}`} target='_blank' className={classes.teamMember} underline='none'>
                                        <Typography className={classes.aavegotchiName} variant='h3'>{gotchi.name}</Typography>
                                        <GotchiSvg id={gotchi.id} size={107} hideWareables={false} />
                                    </Link>
                                </Grid>
                            ))
                        }

                        <Grid item xs={6} sm={4} md={2}>
                            <Link href='https://discord.gg/NXEEETxSkC' target='_blank' className={classes.teamMember} underline='none'>
                                <Typography className={classNames(classes.aavegotchiName, classes.aavegotchiYouName)} variant='h3'>You!</Typography>
                                <Avatar className={classes.aavegotchiAvatar} variant='square' src={ hopeUp } />
                            </Link>
                        </Grid>
                    </>
                )}
            </Grid>
        </Box>
    );
}
