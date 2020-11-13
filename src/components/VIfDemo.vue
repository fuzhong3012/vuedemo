<template>
    <div>
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Sex</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="person in people">
                <td>{{ person.name  }}</td>
                <td>{{ person.age  }}</td>
                <td>{{ person.sex  }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    export default {
        name: 'VIfName',
        data() {
            return {
                people: [{
                    name: 'Jack22222',
                    age: 30,
                    sex: 'Male'
                }, {
                    name: 'Bill2222',
                    age: 26,
                    sex: 'Male'
                }, {
                    name: 'Tracy22222',
                    age: 22,
                    sex: 'Female'
                }, {
                    name: 'Chris2222',
                    age: 36,
                    sex: 'Male'
                }]
            }
        }
    }
</script>