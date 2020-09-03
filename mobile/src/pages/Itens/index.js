import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Modal, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../../components/Header';
import ItemEquipado from '../../components/ItemEquipado';
import Item from '../../components/Item';

import { MaterialIcons as Icon } from '@expo/vector-icons';
import styles from './styles';

export default function Itens(props) {

    const [popUpSemEspaco, setPopUpSemEspaco] = useState(false);
    const [popUpDesequipar, setPopUpDesequipar] = useState(false);
    const [popUpEquipar, setPopUpEquipar] = useState(false);

    function equipar(){
        setPopUpEquipar(!popUpEquipar)
        setPopUpSemEspaco(true)
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header titulo={props.route.name} {...props} />

            <ScrollView style={styles.containerConteudo}>
                <Text style={styles.subtitulo}>Equipados</Text>
                <View style={styles.equipados}>
                    <ItemEquipado desequipar={() => setPopUpDesequipar(true)} imagem={'https://avatars3.githubusercontent.com/u/47929434?s=460&u=1a37672c81408f7857c45a36cdcc3c57c00a827c&v=4'} />
                    <ItemEquipado desequipar={() => setPopUpDesequipar(true)} />
                    <ItemEquipado desequipar={() => setPopUpDesequipar(true)} />
                    <ItemEquipado desequipar={() => setPopUpDesequipar(true)} />
                </View>
                <View style={styles.divisor} />
                <Text style={styles.subtitulo}>Arsenal completo</Text>
                <View>
                    <Item equipar={()=> setPopUpEquipar(true)} nome='Super Mega Item' poder={1} valorPoder={47} imagem={'https://avatars3.githubusercontent.com/u/47929434?s=460&u=1a37672c81408f7857c45a36cdcc3c57c00a827c&v=4'} />
                    <Item equipar={()=> setPopUpEquipar(true)} nome='Super Mega Item' poder={1} valorPoder={47} imagem={'https://avatars3.githubusercontent.com/u/47929434?s=460&u=1a37672c81408f7857c45a36cdcc3c57c00a827c&v=4'} />
                    <Item equipar={()=> setPopUpEquipar(true)} nome='Super Mega Item' poder={1} valorPoder={47} imagem={'https://avatars3.githubusercontent.com/u/47929434?s=460&u=1a37672c81408f7857c45a36cdcc3c57c00a827c&v=4'} />
                </View>
            </ScrollView>

            <Modal
                animationType="fade"
                transparent={true}
                visible={popUpEquipar}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableOpacity
                            style={styles.botaoFecharModal}
                            onPress={() => setPopUpEquipar(!popUpEquipar)}
                        >
                            <Icon name='close' size={20} style={styles.textStyle} />
                        </TouchableOpacity>

                        <Text style={styles.subtitulo}>Equipar Item</Text>

                        <TouchableOpacity
                            style={styles.botaoModal}
                            onPress={() => equipar()}
                        >
                            <Text style={styles.textStyle}>Equipar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="fade"
                transparent={true}
                visible={popUpDesequipar}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableOpacity
                            style={styles.botaoFecharModal}
                            onPress={() => setPopUpDesequipar(!popUpDesequipar)}
                        >
                            <Icon name='close' size={20} style={styles.textStyle} />
                        </TouchableOpacity>

                        <Text style={styles.subtitulo}>Desequipar Item</Text>

                        <TouchableOpacity
                            style={styles.botaoModal}
                            onPress={() => setPopUpDesequipar(!popUpDesequipar)}
                        >
                            <Text style={styles.textStyle}>Desequipar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="fade"
                transparent={true}
                visible={popUpSemEspaco}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableOpacity
                            style={styles.botaoFecharModal}
                            onPress={() => setPopUpSemEspaco(!popUpSemEspaco)}
                        >
                            <Icon name='close' size={20} style={styles.textStyle} />
                        </TouchableOpacity>

                        <Text style={styles.subtitulo}>Sem Espaco</Text>
                        <Text style={styles.texto}>
                            Sem espaço para equipar mais itens!
                            Desequipe um item e tente novamente.
                        </Text>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}