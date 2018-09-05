import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


export interface Props {
    subject: string,
    detail: string,
    date: string
}

interface State {
    subject: string,
    detail: string,
    date: string
}

class AnnounceBoxComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            subject: props.subject,
            detail: props.detail,
            date: props.date
        }
    }

    convertDate = (date: string) => {
        if(date) {
            const newDate = new Date(date)
            const month = newDate.getMonth() + 1
            const day = newDate.getDate()
            return newDate.getFullYear() + '/' + (month > 9 ? month : '0' + month) + '/' + (day > 9 ? day : '0' + day)
        }

        return ''
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.subText}>{this.state.subject}</Text>
                <Text style={styles.dateText}>{this.convertDate(this.state.date)}</Text>
                <Text style={styles.detailText}>{this.state.detail}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 15,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 5 },
        shadowOpacity: .3,
        shadowRadius: 15,
        marginBottom: 15,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 25,
        paddingRight: 25,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    subText: {
        flex: 1,
        flexBasis: '50%',
        marginBottom: 30,
        fontSize: 18,
        fontWeight: 'bold'
    },
    detailText: {
        flex: 1,
        flexBasis: '100%',
        fontSize: 14
    },
    dateText: {
        flex: 1,
        flexBasis: '50%',
        fontSize: 14,
        textAlign: 'right'
    }
})

export default AnnounceBoxComponent