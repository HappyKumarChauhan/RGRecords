import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

const EventDetailsScreen = ({navigation}) => {
    return (
        <LinearGradient colors={['#27363E', '#306165']} style={styles.container}>
            <View style={styles.header}>
                <Icon name='menu' size={30} color='white' />
                <Text style={styles.headerTitle}>Event Details</Text>
                <Icon name='account-circle' size={30} color='white' />
            </View>
            <View style={styles.detailsContainer}>
                <Image source={{ uri: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bXVzaWN8ZW58MHx8MHx8fDA%3D' }} style={styles.banner} />
                <Text style={styles.date}>Date: 14 Jan 2025</Text>
                <ScrollView style={{marginVertical:10}}>
                    <Text style={styles.title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                    <Text style={styles.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quibusdam quos, magni, doloribus laboriosam mollitia nisi fuga beatae exercitationem sunt distinctio, doloremque earum! Enim amet nihil corrupti. Cum debitis illo recusandae distinctio, vero eligendi eum incidunt, voluptate possimus, qui molestiae dignissimos magnam perferendis veniam modi? Vero commodi facilis vel animi possimus reprehenderit, nam nesciunt quas impedit expedita ipsa explicabo esse, optio illo. Deleniti praesentium voluptates dolor dolore, sunt veniam inventore ad minus harum officiis, voluptate dolores quae doloribus consequatur quis laborum ipsa necessitatibus sed ut impedit vel voluptatibus, officia hic. Explicabo rerum eius aperiam sapiente! Nostrum aperiam magni quos quibusdam rerum dolorum ipsam! Inventore tenetur, eius assumenda quaerat aperiam alias, atque, dolores cum voluptas enim laboriosam iste expedita est veritatis recusandae! Nemo eligendi eaque velit quidem maxime, perspiciatis id atque cum nobis repellat consectetur sit modi asperiores porro unde necessitatibus repellendus harum ab quasi odit quod illo. Asperiores, reprehenderit magni veritatis debitis voluptatibus nostrum sed inventore quam veniam, delectus nam tempore voluptatum nihil dolorum enim, vero unde ut excepturi reiciendis consectetur? Delectus culpa consectetur quos expedita fuga voluptates beatae architecto, ex hic aut harum dolor ipsam blanditiis aliquid perferendis laboriosam natus, tempora placeat quod iure ipsa quasi assumenda minus asperiores? Error nam qui, similique animi, ipsum nobis facilis asperiores nemo maiores suscipit excepturi unde! Quasi deleniti assumenda nobis officia repudiandae, iure unde aliquid! Obcaecati dignissimos ipsum molestias numquam repellat facere, voluptates a optio architecto eius, blanditiis consequatur harum ullam laboriosam illum sint aperiam maxime vitae quaerat. Nulla dolorum ea sunt nam illum voluptatibus deserunt ipsa voluptate consequatur debitis earum iure quasi natus commodi laborum eos inventore, possimus recusandae. Recusandae, hic odio, mollitia totam temporibus ad facilis enim quam possimus natus doloremque, qui ea earum et quaerat impedit magnam unde perferendis? Soluta vel minus nisi provident fugiat. Et dolore ducimus molestiae corrupti deleniti suscipit sequi asperiores quas beatae! Alias assumenda eos cumque voluptatem repellat. Animi, eaque. Quis veniam exercitationem pariatur ad distinctio laudantium voluptates vitae itaque facere a cum aliquam ullam autem officia architecto nisi eum excepturi beatae debitis porro, rerum temporibus reprehenderit inventore. Facilis veritatis provident quidem? Consequatur similique voluptatibus asperiores ipsam atque? Quam esse dolore laudantium eos obcaecati, voluptas nobis. Error quia impedit vitae nisi possimus quisquam rerum in amet, atque aliquid quas velit voluptatem nemo asperiores dolorem nulla ipsam! Nostrum qui maxime esse dignissimos consectetur, ab ad eaque, quisquam similique eum placeat debitis rerum! Nulla perferendis excepturi, reiciendis dolorem voluptates voluptatibus aut asperiores delectus quae illum id, quis laboriosam consequatur accusamus quidem temporibus! Saepe quidem adipisci ex, vel eum porro odit suscipit. Qui consectetur asperiores odio laudantium assumenda maxime magni veritatis est non, itaque necessitatibus in recusandae optio culpa facere pariatur vel illo, ducimus earum dignissimos aspernatur voluptas vitae? At culpa vitae aspernatur ducimus minus ad praesentium deserunt harum quam odit eum fugit, voluptas consequuntur, soluta nemo? Maiores eaque vero repellat aperiam placeat molestias qui atque fugit modi suscipit unde ipsa aspernatur possimus, ab nesciunt reprehenderit architecto mollitia minus? Esse reiciendis, magnam veritatis harum tempore adipisci laborum suscipit.
                    </Text>
                    <View style={styles.categoryContainer}>
                        <TouchableOpacity style={styles.categoryButton}><Text style={styles.categoryText}>Singing</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.categoryButton}><Text style={styles.categoryText}>Dance</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.categoryButton}><Text style={styles.categoryText}>Modelling</Text></TouchableOpacity>
                    </View>
                </ScrollView>
            <TouchableOpacity style={styles.applyButton}
            onPress={()=>{navigation.navigate('Terms')}}
            >
                <Text style={styles.applyButtonText}>Apply</Text>
                <Icon name="arrow-forward" size={20} color="white" />
            </TouchableOpacity>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 3,
    },
    headerTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    detailsContainer: {
        marginTop: 20,
        paddingHorizontal:5,
        flex: 1,
    },
    banner: {
        borderColor:'#ffffff',
        borderWidth:2,
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
    },
    date: {
        fontSize: 14,
        fontWeight: '400',
        color: '#ffffff',
    },
    title: {
        fontSize: 18,
        fontWeight: 700,
        color: '#ffffff',
        marginBottom: 12,
    },
    description: {
        fontSize: 12,
        color: '#d9d9d9',
        textAlign: 'justify',
        marginVertical: 10,
    },
    categoryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 15,
    },
    categoryButton: {
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8,
    },
    categoryText: {
        color: '#1E4C57',
        fontWeight: 'bold',
    },
    applyButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#ffffff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
    },
    applyButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        marginRight: 5,
    },
});

export default EventDetailsScreen;
