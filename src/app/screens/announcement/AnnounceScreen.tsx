import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import store from '../../store'
import AnnounceBoxComponent from '../../components/announcement/AnnounceBoxComponent'

export interface Props {

}

interface State {
    PAR_SCH_SEQ_ID: number,
    announceList: any
}

class AnnounceScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            PAR_SCH_SEQ_ID: 0,
            announceList: []
        }
    }

    unsubscribe1: any
    unsubscribe2: any

    componentWillMount() {
        this.unsubscribe1 = store.subscribe(() => { this.setState({ PAR_SCH_SEQ_ID: 1 }) })
        this.unsubscribe2 = store.subscribe(() => { this.setState({ announceList: store.getState().announce }) })
        store.dispatch({ type: '' })
    }

    componentDidMount() {
        store.dispatch({ type: 'FETCH_ANNOUNCE', payload: { SCH_SEQ_ID: this.state.PAR_SCH_SEQ_ID } })
    }

    componentWillUnmount() {
        this.unsubscribe1()
        this.unsubscribe2()
    }

    renderAnnounceBox = () => {
        if(this.state.announceList.length === 0) {
            return (
                <AnnounceBoxComponent subject='No Subject' detail='no information' date=''></AnnounceBoxComponent>
            )
        }

        return (
            this.state.announceList.map( (item: any, index: number) => {
                return (
                    <AnnounceBoxComponent key={index} subject={item.MSG_SUBJECT} detail={item.MSG_BODY} date={item.MSG_DATE}></AnnounceBoxComponent>
                )
            })
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.containerScroll}>
                    {this.renderAnnounceBox()}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    containerScroll: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        paddingLeft: '2%',
        paddingRight: '2%',
        paddingTop: 10,
        paddingBottom: 10
    }
})

export default AnnounceScreen
