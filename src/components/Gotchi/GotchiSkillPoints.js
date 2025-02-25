import React, { useEffect, useState } from 'react';
import { Tooltip } from '@mui/material';
import { useTheme } from '@emotion/react';

import mainApi from 'api/main.api';

import { GotchiSkillpointsStyles, CustomTooltipStyles } from './styles';

export default function GotchiSkillPoints({ id, usedPoints }) {
    const classes = {
        ...GotchiSkillpointsStyles(),
        ...CustomTooltipStyles()
    };
    const theme = useTheme();
    const [loadingPoints, setLoadingPoints] = useState(true);
    const [availablePoints, setAvailablePoints] = useState(true);

    useEffect(() => {
        let controller = new AbortController();

        setLoadingPoints(true);

        mainApi.getAvailableSkillPoints(id)
            .then((response)=> {
                if (!controller.signal.aborted) {
                    setAvailablePoints(response);
                    setLoadingPoints(false);
                }
            }).catch((error) => {
                console.log(error);
            });

        return () => controller?.abort(); // cleanup on destroy

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return (
        <div>
            {!loadingPoints ? (
                <Tooltip
                    title={
                        <React.Fragment>
                            <p>available<span>/</span>used <span>skillpoints</span></p>
                        </React.Fragment>
                    }
                    classes={{ tooltip: classes.customTooltip }}
                    enterTouchDelay={0}
                    placement='top'
                    followCursor
                >
                    <div
                        className={classes.skillpoints}
                        style={{ backgroundColor: availablePoints > 0 && theme.palette.primary.main, color: availablePoints > 0 && theme.palette.secondary.main }}
                    >
                        <span>{availablePoints}</span>
                        /
                        <span style={{ color: usedPoints > 0 && availablePoints < 1 && theme.palette.primary.main }}>{usedPoints}</span>
                    </div>
                </Tooltip>
            ) : (
                <div className={classes.skillpoints}>
                    <span>...</span>
                </div>
            )}
        </div>
    );
}
