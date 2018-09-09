import React from 'react'
import { View, ScrollView, StyleSheet }  from 'react-native'
import store from '../../store'
import CardSchedulExamComponent from '../../components/home/CardSchedulExamComponent'

export interface Props {
    className: string,
    schoolId: string
}

interface State {
    className: string,
    schoolId: string
}

class SchedulScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            className: props.className,
            schoolId: props.schoolId
        }
    }

    componentDidMount() {
        store.dispatch({ type: 'FETCH_SCHEDUL_EXAM', payload: { className: this.state.className, schoolId: this.state.schoolId } })
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scroll}>
                    <CardSchedulExamComponent />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        width: '100%',
        alignItems: 'center'
    }, scroll: {
        width: '90%',
        height: '100%',
        paddingTop: 10,
        paddingBottom: 10
    }
})

export default SchedulScreen