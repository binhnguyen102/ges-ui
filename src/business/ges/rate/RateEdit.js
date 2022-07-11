import React from 'react';
import {
    Edit,
    SimpleForm,
    TextInput,
    NumberInput,
    RadioButtonGroupInput,
    required
} from 'react-admin';
import { styles } from "../../../styles";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

const RateEdit = props => {
    const classes = useStyles();
    return (
        <Edit {...props} title="resources.gm/rates.titles.edit">
            <SimpleForm>
            <TextInput
                    autoFocus
                    source="name"
                    className={classes.two}
                    validate={required()}
                />
                <NumberInput
                    autoFocus
                    source="price"
                    formClassName={classes.firstInGroup}
                    validate={required()}
                />
                <NumberInput
                    autoFocus
                    source="point"
                    formClassName={classes.nextInGroup}
                    validate={required()}
                />
                <RadioButtonGroupInput source="appType" choices={[
                    { id: 'Advisor', name: 'Advisor' },
                    { id: 'Customer', name: 'Customer' },
                ]} />
            </SimpleForm>
        </Edit>
    );
};

export default RateEdit;
